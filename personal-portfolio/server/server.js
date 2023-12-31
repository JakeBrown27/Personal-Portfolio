const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('node:path/posix');
require('dotenv').config();

// server used to send send emails
const app = express();
app.use(express.json());
app.use('/', router);
app.use(express.static(path.resolve(__dirname, '../build')));

// Enable CORS for both domains
const allowedOrigins = [
  'https://jake-brown-portfolio.onrender.com',
  'https://jakebrowndeveloper.com',
];
app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});
