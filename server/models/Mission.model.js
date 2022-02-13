const {Schema, model, ObjectId} = require('mongoose')

const MISSION_ERROR_VALIDATION_MESSAGE = {
    MISSING_NAME : "Nom de la mission manquant",
    MISSING_DESCRIPTION : "Description manquante",
    GAME_ID_MISSING : "GameId manquant",
    GAME_ID_NOT_MATCH : "Le gameId n'existe pas"
}
const MissionSchema = new Schema({
    name: {type: String, required: [true, MISSION_ERROR_VALIDATION_MESSAGE.MISSING_NAME], unique: true},
    gameId: {type: ObjectId, required: [true, MISSION_ERROR_VALIDATION_MESSAGE.MISSING_NAME]},
    description: {type: String, required: [true, MISSION_ERROR_VALIDATION_MESSAGE.MISSING_DESCRIPTION]},
    specificData: {}
})

const Mission = model('Mission', MissionSchema)

module.exports.Mission = Mission
module.exports.MissionSchema = MissionSchema
module.exports.MISSION_ERROR_VALIDATION_MESSAGE = MISSION_ERROR_VALIDATION_MESSAGE