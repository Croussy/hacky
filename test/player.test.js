const assert = require('assert');
const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)
const {MONGOOSE_ERROR} = require('../server/utils/mongoose-error-service')

describe("API Player create", () => {
    it("Should return a response 200", async () => {
        const res = await request.post('/api/player/').send({
            name: "test unit"
        })
        const data = res.body
        assert.equal(res.status, 200);
        assert.equal(data.name, "test unit");
    })
})
describe("API Player missing name", () => {
    it("Should return a response 200", async () => {
        const res = await request.post('/api/player/').send({})
        const data = res.body
        assert.equal(res.status, 400);
        assert.equal(data.message.name.type, MONGOOSE_ERROR.TYPE.REQUIRED);
        assert.equal(data.message.name.message, "Nom du joueur manquant");
    })
})
describe("API Player already exist", () => {
    it("Should return a response 200", async () => {
        await request.post('/api/player/').send({name: "Player exist"})
        const res = await request.post('/api/player/').send({name: "Player exist"})
        const data = res.body

        assert.equal(res.status, 400);
        assert.equal(data.message.type, MONGOOSE_ERROR.TYPE.UNIQUE);
        assert.equal(data.message.message, MONGOOSE_ERROR.MESSAGE.MUST_BE_UNIQUE);
    })
})