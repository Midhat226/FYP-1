const express = require('express')
let app = express.Router()
const path = require("path");
var bodyParser = require('body-parser');
const config = require('../config.js');
const twil = require('twilio')(config.accountSID, config.authToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../","/views", "verify.html"));
});

// Verify Endpoint
app.post('/', function(req, res){
    console.log(req.body.phone_number,req.body.code);
    if (req.body.phone_number && (req.body.code).length === 6) {
        twil
            .verify
            .services(config.serviceID)
            .verificationChecks
            .create({
                to: `+${req.body.phone_number}`,
                code: req.body.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.sendFile(path.join(__dirname, "../","/views", "dashboard.html"));
                }
                else{
                    res.sendFile(path.join(__dirname, "../","/views", "error.html"));
                }
            })
    }
    else{
        res.sendFile(path.join(__dirname, "../","/views", "error.html"));
    }
    })


module.exports = app