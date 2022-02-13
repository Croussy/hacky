const router = require('express').Router()
const {getHome} = require('../controllers/app.controller')

router.route('/')
    .get(getHome)

module.exports = router;