const {Schema, model, ObjectId} = require('mongoose')

const GAME_ERROR_VALIDATION_MESSAGE = {
    MISSING_NAME: "Nom du jeu manquant"
}
const GameSchema = new Schema({
    name: {type: String, required: [true, GAME_ERROR_VALIDATION_MESSAGE.MISSING_NAME], unique: true},
    description: String,
    missions: [
        ObjectId
    ]
})

const Game = model('Game', GameSchema)

module.exports.Game = Game
module.exports.GameSchema = GameSchema
module.exports.GAME_ERROR_VALIDATION_MESSAGE = GAME_ERROR_VALIDATION_MESSAGE