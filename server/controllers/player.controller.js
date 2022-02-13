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

    let player = await findPlayerByName(data.pseudo)
    if (player) {
        res.status(200).send(prepareDataToSend(player, data.gameId))
        return
    }

    const dataNewPlayer = {
        name: data.pseudo,
        scores: [
            {
                gameId: data.gameId,
                step: 2,
                globalScore: 0,
                missionsAchieved: []
            }
        ]
    }

    player = new Player(dataNewPlayer)
    player.save((err, response) => {
        if (err) {
            res.status(400).send({
                message: computeErrorsForFront(err)
            })
        } else {
            dataNewPlayer["id"] = response._id
            res.status(200).send(prepareDataToSend(dataNewPlayer, data.gameId))
        }
    })
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
            message: "Error retrieving find game by id"
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
    const score = player.scores.find(score => score.gameId === gameId)
    return {
        name: player.name,
        ...score
    }
}