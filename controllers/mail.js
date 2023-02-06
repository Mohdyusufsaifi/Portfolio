const express= require('express');
const app=express();
const nodemailer = require('nodemailer');

exports.sendEmail=(req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:'azeemsaifi38180@gmail.com',
            pass: 'sstsshaqyxudtxbg'
        },
    });

    const mailOptions = {
        from: "azeem.khan@locofast.com",
        to: "azeem.khan@locofast.com",
        subject:"Someone Contact your site",
        html: "<p>Name: "+req.body.name+"</p> Email: "+req.body.email+"<p> Phone Number: "+req.body.number+
        "<p> Message: "+req.body.message
    };
    if(req.body.name==""){
        res.send(`<script>alert("fill all field")</script>`)
    }
    else{
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(`<script>window.location.assign("http://localhost:3000/Contact")</script>`)
        }
    })
}};
