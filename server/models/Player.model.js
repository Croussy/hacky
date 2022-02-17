const {Schema, model, ObjectId} = require('mongoose')

const PLAYER_ERROR_VALIDATION_MESSAGE = {
    MISSING_NAME: "Nom du joueur manquant",
    GAME_ID_MISSING: "GameId manquant"
}

const PlayerScoreSchema = new Schema({
    gameId: {type: ObjectId, required: [true, PLAYER_ERROR_VALIDATION_MESSAGE.GAME_ID_MISSING]},
    step: {type: Number, default: 2},
    globalScore: {type: Number, default: 0},
    missionsAchieved: [ObjectId]
})

const PlayerSchema = new Schema({
    name: {type: String, required: [true, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME], unique: true},
    scores: [PlayerScoreSchema]
})

const Player = model('Player', PlayerSchema)

module.exports.Player = Player
module.exports.PlayerSchema = PlayerSchema
module.exports.PLAYER_ERROR_VALIDATION_MESSAGE = PLAYER_ERROR_VALIDATION_MESSAGE