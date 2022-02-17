const router = require('express').Router()
const {addGame, getGameByName} = require('../controllers/game.controller')


router.route('/')
    .post(addGame)
router.route('/:name')
    .get(getGameByName)


module.exports = router;