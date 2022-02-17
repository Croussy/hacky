const {addMission, getMissionById, getMissionsByGameId} = require("../controllers/mission.controller");
const router = require('express').Router()


router.route('/')
    .post(addMission)

router.route('/:id')
    .get(getMissionById)

router.route('/gameMissions/:gameId')
    .get(getMissionsByGameId)


module.exports = router;