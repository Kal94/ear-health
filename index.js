const express = require('express');
const app = express();
const fs = require("fs");
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require("cors");
app.use(cors());

const nodemailer = require('nodemailer');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kkassam0@googlemail.com',
        pass: 'iaokkarcxnihdvzm'
    }
});

app.post('/email', (req, res) => {
    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Kazim" <kkassam0@gmail.com>', // sender address
        to: '<hello.kaltech@gmail.com>', // list of receivers
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