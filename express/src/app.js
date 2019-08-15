const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const app = express();

dotenv.config()
app.use(bodyParser.json())

// API routes

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

module.exports = app