const express = require('express')
const path = require("path");
let app = express.Router()
var bodyParser = require('body-parser');
const client = require('../connection.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../","/views","signup.html"));
});

app.post('/', (req, res) => {
    // get all the values 
    const { provider_cnic,provider_name, provider_phone, provider_city, warningcount} = req.body;
    console.log("Data found: ",provider_cnic,provider_name, provider_phone, provider_city,warningcount);

    // check if the are empty 
    if (!provider_cnic|| !provider_name || !provider_phone || !provider_city || !warningcount) {
        res.sendFile(path.join(__dirname, "../","/views","signup.html"), { err: "All Fields Required !"});
    } 
    else {
        client.query('SELECT * FROM public.provider WHERE provider_cnic = $1', [provider_cnic], function(error, results){
            if (error){
                console.log(error);
            }
            else if (results.length > 0){
                res.sendFile(path.join(__dirname, "../","/views","signup.html"), { err: "Provider Exists, Try Logging In !"});
            }
            else{
                const newProvider =  client.query('INSERT INTO public.provider (provider_cnic, provider_name, provider_phone, provider_city,warningcount) VALUES ($1, $2, $3, $4, $5) RETURNING *',[provider_cnic, provider_name, provider_phone, provider_city, warningcount] );
                console.log("data entered");
                //res.send(newProvider);
                res.sendFile(path.join(__dirname, "../","/views","login.html"));
            }
        });
    }
});


module.exports = app