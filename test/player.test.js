const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')
const {PLAYER_ERROR_VALIDATION_MESSAGE, Player} = require('../server/models/Player.model')
const {dbConnect, dbClose} = require("../server/config/db-manager");
const {Game} = require("../server/models/Game.model");

let gameId = ""
let playedAlreadyExistId = ""
describe("API Player create", () => {
    before('Player create : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Player create : Remove Player collection", () => {
        return Player.deleteMany({})
    })
    before("Player create : Remove Game collection", () => {
        return Game.deleteMany({})
    })
    before("Mission create : Create Game mock", (done) => {
        const new_game = new Game({name: "hacky"})
        new_game.save().then((game) => {
            gameId = game._id
            done()
        })
    })
    before("Mission create : Create Player mock", (done) => {
        const new_player = new Player({name: "playerAlreadyExist"})
        new_player.scores.push({gameId})
        new_player.save().then((player) => {
            playedAlreadyExistId = player._id
            done()
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return a response 200", (done) => {
        request.post('/api/player/').send({pseudo: "test unit", gameId})
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.name, "test unit");
                done()
            })
    })
    it("Should return a response 400 and missing name", (done) => {
        request.post('/api/player/').send({gameId})
            .expect(400)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.error.type, MONGOOSE_ERROR.TYPE.REQUIRED);
                assert.equal(data.error.message, PLAYER_ERROR_VALIDATION_MESSAGE.MISSING_NAME);
                done()
            })
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
            })
    })
    it("Should return a response 200 and get player already create", (done) => {
        request.post('/api/player/').send({pseudo: 'playerAlreadyExist', gameId})
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                const data = res.body
                assert.equal(data.name, 'playerAlreadyExist');
                assert.equal(data.id, playedAlreadyExistId);
                done()
            })
    })
})
let playerId = ""
describe("API : Get player", () => {
    before('Get player : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Get player : Remove player collection", () => {
        return Player.deleteMany({})
    })
    before("Get player : Remove Game collection", () => {
        return Game.deleteMany({})
    })

    before("Get player : Create Game mock", (done) => {
        const new_game = new Game({name: "TestGame"})
        new_game.save().then((game) => {
            gameId = game._id
            done()
        })
    })

    before("Get player : Create Player mock", (done) => {
        const player = new Player({name: "player 2"})
        player.scores.push({gameId})
        player.save().then((data) => {
            playerId = data._id
            done();
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

describe("API : Save score", () => {
    before('Save player : connect', () => {
        return dbConnect(process.env.DATABASE_TEST)
    })
    before("Save player : Remove player collection", () => {
        return Player.deleteMany({})
    })
    before("Save player : Remove Game collection", () => {
        return Game.deleteMany({})
    })

    before("Save player : Create Game mock", (done) => {
        const new_game = new Game({name: "TestGame"})
        new_game.save().then((game) => {
            gameId = game._id
            done()
        })
    })

    before("Save player : Create Player mock", (done) => {
        const player = new Player({name: "TestPlayerSaveScore"})
        player.scores.push({gameId})
        player.save().then((data) => {
            playerId = data._id
            done();
        })
    })
    after(() => {
        dbClose()
    })
    it("Should return 200 and save new score", (done) => {
        request.put('/api/player/' + playerId)
            .send({
                gameId,
                step: 4,
                globalScore: 4750,
                missionsAchieved: []
            })
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                assert.equal(res.body.name, "TestPlayerSaveScore");
                assert.equal(res.body.step, 4);
                assert.equal(res.body.globalScore, 4750);
                done()
            })
    })
})