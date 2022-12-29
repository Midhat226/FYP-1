const express = require('express')
const path = require("path");
let app = express.Router()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../","/views","logout.html"));
});

module.exports = app