const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mountRoutes = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mountRoutes(app)

module.exports = app;