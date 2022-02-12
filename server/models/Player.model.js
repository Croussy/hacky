const {Schema, model, ObjectId} = require('mongoose')

const PlayerSchema = new Schema({
    name: {type: String, required: [true, "Nom du joueur manquant"], unique: true},
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