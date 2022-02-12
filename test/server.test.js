var assert = require('assert');

const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)

describe("/ endpoint", () => {
    it("Should return a response 200", async () => {
        const res = await request.get('/')
        assert.equal(res.status, 200);
    })
})