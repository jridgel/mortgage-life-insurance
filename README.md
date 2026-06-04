# QuoteFlow – Mortgage Life Insurance Agent Portal

A full-stack web app that lets insurance agents capture mortgage life insurance leads and push them directly into Zoho CRM.

## Features

- **Lead capture form** — collects name, contact info, age, coverage amount, loan amount, and tobacco use
- **Zoho CRM integration** — new leads are created automatically via the Zoho API
- **Rate limiting** — prevents form spam (10 submissions per 15 minutes per IP)
- **Input validation** — server-side checks for required fields and valid email format
- **React frontend** — built with Vite and Tailwind CSS

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18, Vite, Tailwind CSS      |
| Backend  | Node.js, Express                  |
| CRM      | Zoho CRM (OAuth2)                 |
| Deploy   | Netlify (frontend), any Node host |

## Project Structure

```
├── client/          # React + Vite frontend
│   └── src/
│       ├── components/
│       └── App.jsx
├── server/          # Express API
│   ├── index.js     # Routes & rate limiting
│   ├── zoho.js      # Zoho CRM integration
│   └── .env.example
├── index.html       # Agent portal (standalone)
└── package.json     # Root scripts
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/jridgel/mortgage-life-insurance.git
cd mortgage-life-insurance
```

### 2. Install dependencies

```bash
npm run install:all
```

### 3. Configure environment variables

```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your Zoho CRM credentials:

```env
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
ZOHO_REGION=com        # com | eu | in | com.au | jp
PORT=3001
CLIENT_URL=http://localhost:5173
```

> Get your Zoho OAuth2 credentials at [api-console.zoho.com](https://api-console.zoho.com/)

### 4. Run in development

```bash
npm run dev
```

This starts both the Express server (port 3001) and the Vite dev server (port 5173) concurrently.

## API

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/api/leads`  | Submit a new lead to CRM |
| GET    | `/api/health` | Health check             |

## License

MIT
