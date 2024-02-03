const express = require('express');
const app = express();
const fs = require("fs");
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require("cors");
const nodemailer = require('nodemailer');
dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abbastaki.at@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

app.post('/email', (req, res) => {
    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Ear Health" <abbastaki.at@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: `New Enquiry - ${req.body.name}`, // Subject line
        text: req.body.message, // plain text body
        html: `<b>${req.body.message}</b> from ${req.body.email}`, // html body
    });

    return res.json()
})

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(8000, () => {
    console.log('8000')
});