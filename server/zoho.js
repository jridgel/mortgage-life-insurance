const axios = require('axios');

let accessToken = null;
let tokenExpiry = 0;

async function refreshAccessToken() {
  const region = process.env.ZOHO_REGION || 'com';
  const res = await axios.post(`https://accounts.zoho.${region}/oauth/v2/token`, null, {
    params: {
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    },
  });
  accessToken = res.data.access_token;
  tokenExpiry = Date.now() + (res.data.expires_in - 60) * 1000;
}

async function getAccessToken() {
  if (!accessToken || Date.now() >= tokenExpiry) {
    await refreshAccessToken();
  }
  return accessToken;
}

async function createLead(formData) {
  const token = await getAccessToken();
  const region = process.env.ZOHO_REGION || 'com';

  const lead = {
    First_Name: formData.firstName,
    Last_Name: formData.lastName,
    Email: formData.email,
    Phone: formData.phone,
    Lead_Source: 'Web Site',
    Description: `Mortgage Life Insurance Inquiry
Coverage Requested: $${Number(formData.coverageAmount).toLocaleString()}
Loan Amount: $${Number(formData.loanAmount).toLocaleString()}
Age: ${formData.age}
Tobacco User: ${formData.tobacco === 'yes' ? 'Yes' : 'No'}
Message: ${formData.message || 'N/A'}`,
    // Map to standard Zoho Lead fields
    Annual_Revenue: formData.loanAmount,
    No_of_Employees: 0,
    Lead_Status: 'Not Contacted',
    Industry: 'Finance',
    // Custom fields — add these in Zoho if they don't exist yet
    // Coverage_Amount__c: formData.coverageAmount,
    // Loan_Amount__c: formData.loanAmount,
    // Tobacco_User__c: formData.tobacco === 'yes',
  };

  const res = await axios.post(
    `https://www.zohoapis.${region}/crm/v2/Leads`,
    { data: [lead] },
    { headers: { Authorization: `Zoho-oauthtoken ${token}` } }
  );

  return res.data;
}

module.exports = { createLead };
