const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {GAME_ERROR_VALIDATION_MESSAGE, Game} = require('../server/models/Game.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");

describe("API Game create", () => {
    before('Game create : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Game create : Remove Game collection", () => {
        return Game.deleteMany({})
    })
    before("Game create : Create Game mock", (done) => {
        const new_game = new Game({name: "hackyAlreadyExist"})
        new_game.save().then(() => {
            done()
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
            .send({name: 'hackyAlreadyExist'})
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
describe("API : Get game", () => {
    before('Get game : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Get game : Remove game collection", () => {
        return Game.deleteMany({})
    })
    before("Get game : Remove game collection", () => {
        return Game.deleteMany({})
    })
    before("Get game : Create game mock", (done) => {
        const game = new Game({name: "hacky 2"})
        game.save().then(() => {
            done();
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.get('/api/game/hacky 2')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "hacky 2");
                done()
            })
    })
})