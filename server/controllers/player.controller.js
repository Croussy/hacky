const {Player} = require('../models/Player.model')
const {computeErrorsForFront, MONGOOSE_ERROR} = require('../utils/mongoose-error-service')
const {PLAYER_ERROR_VALIDATION_MESSAGE} = require("../models/Player.model");

module.exports.createOrGetPlayer = async (req, res) => {
    const data = req.body
    if (!data.gameId) {
        res.status(400).send({
            error: {
                type: MONGOOSE_ERROR.TYPE.REQUIRED,
                message: PLAYER_ERROR_VALIDATION_MESSAGE.GAME_ID_MISSING
            }
        })
        return
    }
    if (!data.pseudo) {
        res.status(400).send({
            error: {
                type: MONGOOSE_ERROR.TYPE.REQUIRED,
                message: PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME
            }
        })
        return
    }

    const player = await findPlayerByName(data.pseudo)
    if (player) {
        res.status(200).send(prepareDataToSend(player, data.gameId))
        return
    }

    const resNewPlayer = await createPlayer(data.pseudo, data.gameId)
    if (resNewPlayer.message) {
        res.status(400).send(resNewPlayer)
        return
    }

    res.status(200).send(prepareDataToSend(resNewPlayer, data.gameId))
}
module.exports.getPlayerById = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400).send({
            message: 'No id sent'
        })
        return
    }
    Player.findById(id).then(player => {
        res.status(200).send(player)
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving find player by id"
        })
    })
}
module.exports.saveScore = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400).send({
            message: 'No id sent'
        })
        return
    }
    Player.findById(id).then(player => {
        player.scores.forEach(score => {
            if (score.gameId.toString() === req.body.gameId) {
                score.step = req.body.step
                score.globalScore = req.body.globalScore
                score.missionsAchieved = req.body.missionsAchieved
            }
        })
        player.save().then((data) => {
            res.status(200).send(data)
        })
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving find player by id"
        })
    })
}

const findPlayerByName = async (name) => {
    return await Player.find({name: name}).then((players) => {
        return players.length ? players[0] : null
    }).catch(() => {
        return false
    })
}
const prepareDataToSend = (player, gameId) => {
    const score = player.scores.find(score => score.gameId.toString() === gameId)
    return {
        id: player._id,
        name: player.name,
        step: score.step,
        globalScore: score.globalScore,
        missionsAchieved: score.missionsAchieved
    }
}
const createPlayer = async (pseudo, gameId) => {
    const player = new Player({name: pseudo})
    player.scores.push({gameId: gameId})

    return await player.save().then((data) => {
        return data
    }).catch(err => {
        return {message: computeErrorsForFront(err)}
    })
}