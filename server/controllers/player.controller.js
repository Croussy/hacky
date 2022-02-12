const {Player} = require('../models/Player.model')
const {computeErrorsForFront} = require('../utils/mongoose-error-service')

module.exports.createPlayer = (req, res) => {
    const data = req.body
    const player = new Player(data)
    player.save((err, response) => {
        if (err) {
            res.status(400).send({
                message: computeErrorsForFront(err)
            })
        } else {
            data["id"] = response._id
            res.status(200).send(data)
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