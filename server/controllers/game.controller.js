const { Game } = require('../models/Game.model')
const { computeErrorsForFront } = require('../utils/mongoose-error-service')

module.exports.addGame = (req, res) => {
    const data = req.body
    const game = new Game(data)
    game.save( (err, response) => {
        if(err) {
            res.status(400).send({
                message: computeErrorsForFront(err)
            })
        } else {
            data["id"] = response._id
            res.status(200).send(data)
        }
    })
}
module.exports.getGameById = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400).send({
            message: 'No id sent'
        })
        return
    }

    Game.findById(id).then(game => {
        res.status(200).send(game)
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving find game by id"
        })
    })
}