const {Schema, model, ObjectId} = require('mongoose')

const PLAYER_ERROR_VALIDATION_MESSAGE = {
    MISSING_NAME : "Nom du joueur manquant"
}

const PlayerSchema = new Schema({
    name: {type: String, required: [true, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME], unique: true},
    score: [
        {
            gameId: ObjectId,
            globalScore: Number,
            timeStart: Date,
            timeEnd: Date,
            missionsAchieved: [ObjectId]
        }
    ]
})

const Player = model('Player', PlayerSchema)

module.exports.Player = Player
module.exports.PlayerSchema = PlayerSchema
module.exports.PLAYER_ERROR_VALIDATION_MESSAGE = PLAYER_ERROR_VALIDATION_MESSAGE