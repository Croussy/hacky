const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {Game} = require('../server/models/Game.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const mongoose = require("mongoose");
const {Mission, MISSION_ERROR_VALIDATION_MESSAGE} = require("../server/models/Mission.model");

let gameId = ''
describe("API Mission create", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.missions.drop(() => {
                const mission = new Mission({name: "mission2", "description": "This a description"})
                mission.save().then(() => {
                    const game = new Game({name: "hacky"})
                    game.save().then((res) => {
                        gameId = res._id
                        done()
                    })
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request
            .post('/api/mission/')
            .send({name: "mission 1", description: "hacky description", gameId: gameId})
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "mission 1");
                done()
            })
    })
    it("Should return a response 400 and missing name", (done) => {
        request.post('/api/mission/')
            .send({gameId: gameId, description: "hacky description"})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message.name.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.message.name.message, MISSION_ERROR_VALIDATION_MESSAGE.MISSING_NAME);
                done()
            })
    })
    it("Should return a response 400 and missing description", (done) => {
        request.post('/api/mission/')
            .send({gameId: gameId, name: "mission 3"})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message.description.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.message.description.message, MISSION_ERROR_VALIDATION_MESSAGE.MISSING_DESCRIPTION);
                done()
            })
    })
    it("Should return a response 400 and missing gameId", (done) => {
        request.post('/api/mission/')
            .send({name: "mission 4", description: "hacky description"})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.message, MISSION_ERROR_VALIDATION_MESSAGE.GAME_ID_MISSING);
                done()
            })
    })
})

let missionId = ""
describe("API : Get mission", () => {
    before((done) => {
        dbConnect(process.env.DATABASE_TEST).then(() => {
            mongoose.connection.collections.missions.drop(() => {
                const mission = new Mission({name: "mission2", "description": "This a description"})
                mission.save().then(res => {
                    missionId = res._id
                    done()
                })
            })
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.get('/api/mission/' + missionId)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "mission2");
                done()
            })
    })
})