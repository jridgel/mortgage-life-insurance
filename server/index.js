require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { createLead } = require('./zoho');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many submissions. Please try again later.' },
});

app.post('/api/leads', leadLimiter, async (req, res) => {
  const { firstName, lastName, email, phone, age, coverageAmount, loanAmount, tobacco } = req.body;

  if (!firstName || !lastName || !email || !phone || !age || !coverageAmount || !loanAmount) {
    return res.status(400).json({ error: 'All required fields must be provided.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const result = await createLead(req.body);
    res.json({ success: true, message: 'Thank you! A licensed agent will contact you shortly.' });
  } catch (err) {
    console.error('Zoho CRM error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to submit lead. Please try again.' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
