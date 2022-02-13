const router = require('express').Router()
const {createOrGetPlayer, getPlayerById} = require('../controllers/player.controller')

router.route('/')
    .post(createOrGetPlayer)
router.route('/:id')
    .get(getPlayerById)


module.exports = router;