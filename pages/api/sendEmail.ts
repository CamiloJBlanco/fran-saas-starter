import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const emailContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
      <h2 style="color: #333; text-align: center;">New Support Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Description:</strong></p>
      <p>${description}</p>
      <p><strong>Sent from:</strong> ${referer || 'Not specified or hidden'}</p>
    </div>
  </div>
`;


  const emailOptions = {
    to: ['cblancodelavega@udesa.edu.ar'],
    from: 'cblancodelavega@udesa.edu.ar',
    subject: subject || 'New Support Request',
    html: emailContent,
  };

  try {
    await sgMail.send(emailOptions);
    res.status(204).end();
  } catch (error) {
    console.error('Error sending support email:', error);
    res.status(500).json({ error: 'An error occurred while sending the support email.' });
  }
}
