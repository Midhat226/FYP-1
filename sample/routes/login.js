const express = require('express')
let app = express.Router()
const path = require("path");
var bodyParser = require('body-parser');
const config = require('../config.js');
const twil = require('twilio')(config.accountSID, config.authToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../","/views", "login.html"));
});

// Login Endpoint
app.post("/", function(req,res){
    const phone_number = req.body.phone_number;
    const selected_channel = req.body.channel;
    console.log(phone_number,selected_channel);
    if (phone_number) {
    twil
    .verify
    .services(config.serviceID)
    .verifications
    .create({
        to: `+${phone_number}`,
        channel: selected_channel
    })
    .then((data)=>{
        res.sendFile(path.join(__dirname, "../","/views", "verify.html"));
    })
    }
})

module.exports = app