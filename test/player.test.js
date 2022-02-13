const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {PLAYER_ERROR_VALIDATION_MESSAGE, Player} = require('../server/models/Player.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const mongoose = require("mongoose");
const {Game} = require("../server/models/Game.model");

let gameId = ""
describe("API Player create", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.players.drop(() => {
                const newGame = new Game({name: 'hacky'})
                newGame.save().then(game=> {
                    gameId = game._id
                    const player = new Player({name: "player1"})
                    player.save().then(() => {
                        done();
                    })
                })

            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.post('/api/player/').send({pseudo: "test unit", gameId: gameId })
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.name, "test unit");
                done()
            })
    })
    it("Should return a response 400 and missing name", (done) => {
        request.post('/api/player/').send({gameId: gameId})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.error.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.error.message, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME);
                done()
            } )
    })
    it("Should return a response 400 and missing gameId", (done) => {
        request.post('/api/player/').send({pseudo: 'Test unit'})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.error.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.error.message, PLAYER_ERROR_VALIDATION_MESSAGE.GAME_ID_MISSING);
                done()
            } )
    })
})
let playerId = ""
describe("API : Get player", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.players.drop(() => {
                const player = new Player({name: "player 2"})
                player.save().then((data) => {
                    playerId = data._id
                    done();
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.get('/api/player/' + playerId)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "player 2");
                done()
            })
    })
})