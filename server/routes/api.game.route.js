const router = require('express').Router()
const {addGame, getGameById} = require('../controllers/game.controller')


router.route('/')
    .post(addGame)
router.route('/:id')
    .get(getGameById)


module.exports = router;