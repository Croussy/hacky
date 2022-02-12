const {Mission, MISSION_ERROR_VALIDATION_MESSAGE} = require('../models/Mission.model')
const {computeErrorsForFront} = require('../utils/mongoose-error-service')
const {Game} = require("../models/Game.model");

module.exports.addMission = async (req, res) => {
    const data = req.body
    if (!data.gameId) {
        res.status(400).send({
            message: MISSION_ERROR_VALIDATION_MESSAGE.GAME_ID_MISSING
        })
        return
    }

    const isGameExist = await checkIfGameIdExist(data.gameId)
    if (!isGameExist) {
        res.status(400).send({
            message: MISSION_ERROR_VALIDATION_MESSAGE.GAME_ID_NOT_MATCH
        })
        return
    }

    const mission = new Mission(data)
    mission.save((err, response) => {
        if (err) {
            res.status(400).send({
                message: computeErrorsForFront(err)
            })
        } else {
            data["id"] = response._id
            addMissionToGame(data.gameId, data["id"])
            res.status(200).send(data)
        }
    })
}

module.exports.getMissionById = (req, res) => {
    const id = req.params.id
    Mission.findById(id).then(mission => {
        res.status(200).send(mission)
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving find mission by id"
        })
    })
}

const checkIfGameIdExist = async (gameId) => {
    return await Game.findById(gameId).then((game) => {
        return !!game
    }).catch(() => {
        return false
    })
}
const addMissionToGame = async (gameId, missionId) => {
    Game.findByIdAndUpdate(
        gameId,
        {"$push": {"missions": missionId}},
        {"new": true, "upsert": true},
        (err) => {
            if (err) throw err;
        })
}