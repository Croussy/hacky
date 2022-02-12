const { Player } = require('../models/Player.model')
const { computeErrorsForFront } = require('../utils/mongoose-error-service')

module.exports.createPlayer = (req, res) => {
    const data = req.body
    const player = new Player(data)
    player.save( err => {
        if(err) {
            res.status(400).send({
                message: computeErrorsForFront(err)
            })
        } else {
            res.status(200).send(data)
        }
    })
}