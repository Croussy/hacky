const router = require('express').Router()
const {createPlayer, getPlayerById} = require('../controllers/player.controller')


router.route('/')
    .post(createPlayer)
router.route('/:id')
    .get(getPlayerById)


module.exports = router;