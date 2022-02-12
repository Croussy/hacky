const router = require('express').Router()
const {createPlayer} = require('../controllers/player.controller')


router.route('/')
    .post(createPlayer)


module.exports = router;