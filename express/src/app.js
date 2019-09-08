const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const app = express();
const Knex = require('knex')
const { Model } = require('objection')


dotenv.config()
app.use(bodyParser.json())

// objection setup
const knexfile = require('./knexfile')
const knex = Knex(knexfile[process.env.NODE_ENV])
Model.knex(knex)

// API routes
app.use("/api/auth", require("./routes/auth"))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

module.exports = app