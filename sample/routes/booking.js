const express = require('express')
const path = require("path");
let app = express.Router()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../","/views","booking.html"));
});

module.exports = app