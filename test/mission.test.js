const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {Game} = require('../server/models/Game.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const {Mission, MISSION_ERROR_VALIDATION_MESSAGE} = require("../server/models/Mission.model");

let gameId = ''
describe("API Mission create", () => {
    before( 'Mission create : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Mission create : Remove Game collection", () => {
        return Game.deleteMany({})
    })
    before("Mission create : Remove Mission collection", () => {
        return Mission.deleteMany({})
    })
    before("Mission create : Create Game mock", (done) => {
        const new_game = new Game({name: "hacky"})
        new_game.save().then((game) => {
            gameId = game._id
            done()
        })
    })
    before("Mission create : Create Mission mock", () => {
        const new_mission = new Mission({name: "missionAlreadyExist", "description": "This a description", "gameId": gameId})
        return new_mission.save()
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
    it("Should return a response 400 and mission already exist", (done) => {
        request.post('/api/mission/')
            .send({name: "missionAlreadyExist", description: "hacky description", gameId})
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

let missionId = ""
describe("API : Get mission", () => {
    before( 'Get mission : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Get mission : Remove Game collection", () => {
        return Game.deleteMany({})
    })
    before("Get mission : Remove Mission collection", () => {
        return Mission.deleteMany({})
    })
    before("Get mission : Create Game mock", (done) => {
        const new_game = new Game({name: "hacky"})
        new_game.save().then((game) => {
            gameId = game._id
            done()
        })
    })
    before("Get mission : Create Mission mock", (done) => {
        const new_mission = new Mission({name: "missionAlreadyExist", "description": "This a description", "gameId": gameId})
        new_mission.save().then((mission) => {
            missionId = mission._id
            done()
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
                assert.equal(res.body.name, "missionAlreadyExist");
                done()
            })
    })
})