const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const logger = require('morgan')
const mountRoutes = require('./routes')
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: './server/config/.env'});

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public/dist')));

mountRoutes(app)

module.exports = app;