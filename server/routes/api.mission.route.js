const {addMission, getMissionById} = require("../controllers/mission.controller");
const router = require('express').Router()


router.route('/')
    .post(addMission)

router.route('/:id')
    .get(getMissionById)


module.exports = router;