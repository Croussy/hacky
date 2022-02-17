const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const logger = require('morgan')
const mountRoutes = require('./routes')
const path = require("path");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config({path: './server/config/.env'});

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));

mountRoutes(app)

module.exports = app;