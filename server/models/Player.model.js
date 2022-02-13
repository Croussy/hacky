const {Schema, model} = require('mongoose')

const PLAYER_ERROR_VALIDATION_MESSAGE = {
    MISSING_NAME: "Nom du joueur manquant",
    GAME_ID_MISSING: "GameId manquant"
}

const PlayerSchema = new Schema({
    name: {type: String, required: [true, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME], unique: true},
    scores: []
})

const Player = model('Player', PlayerSchema)

module.exports.Player = Player
module.exports.PlayerSchema = PlayerSchema
module.exports.PLAYER_ERROR_VALIDATION_MESSAGE = PLAYER_ERROR_VALIDATION_MESSAGE