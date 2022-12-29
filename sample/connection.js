const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8080,
    password: "midhat",
    database: "FYP_DB"
})

module.exports = client