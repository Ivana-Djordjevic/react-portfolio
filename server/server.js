const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// nodemailer configuration
const transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ivanadjordjevic.contactme@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    }
}));

//API endpoint to send emails
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
        from: 'ivanadjordjevic.contactme@gmail.com',
        to: 'ivana.djordjevic@live.ca',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\n Email: ${email}\n Message: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
} 

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
