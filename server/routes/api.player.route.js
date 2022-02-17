const router = require('express').Router()
const {createOrGetPlayer, getPlayerById, saveScore} = require('../controllers/player.controller')

router.route('/')
    .post(createOrGetPlayer)
router.route('/:id')
    .get(getPlayerById)
    .put(saveScore)


module.exports = router;