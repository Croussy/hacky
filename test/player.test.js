const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {PLAYER_ERROR_VALIDATION_MESSAGE, Player} = require('../server/models/Player.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const mongoose = require("mongoose");

describe("API Player create", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.players.drop(() => {
                const player = new Player({name: "player1"})
                player.save().then(() => {
                    done();
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.post('/api/player/').send({name: "test unit"})
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.name, "test unit");
                done()
            })
    })
    it("Should return a response 400 and missing name", (done) => {
        request.post('/api/player/').send({})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message.name.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.message.name.message, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME);
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