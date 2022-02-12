const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {GAME_ERROR_VALIDATION_MESSAGE, Game} = require('../server/models/Game.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const mongoose = require("mongoose");

describe("API Game create", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.games.drop(() => {
                const game = new Game({name: "hacky already exist"})
                game.save().then(() => {
                    done();
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request
            .post('/api/game/')
            .send({name: "Hacky 1"})
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "Hacky 1");
                done()
            })
    })
    it("Should return a response 400 and missing name", (done) => {
        request.post('/api/game/')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message.name.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.message.name.message, GAME_ERROR_VALIDATION_MESSAGE.MISSING_NAME);
                done()
            })
    })
    it("Should return a response 400 and a game has already this name", (done) => {
        request.post('/api/game/')
            .send({name: 'hacky already exist'})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message.type, MONGOOSE_ERROR.TYPE.UNIQUE);
                assert.equal(data.message.message, MONGOOSE_ERROR.MESSAGE.MUST_BE_UNIQUE);
                done()
            })
    })
})
let gameid = ""
describe("API : Get game", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.games.drop(() => {
                const game = new Game({name: "hacky 2"})
                game.save().then((data) => {
                    gameid = data._id
                    done();
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.get('/api/game/' + gameid)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "hacky 2");
                done()
            })
    })
})