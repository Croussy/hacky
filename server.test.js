const app = require('./app')
const supertest = require('supertest')
const request = supertest(app)


describe("/ endpoint", () => {
    it("Should return a response 200", async () => {
        const res = await request.get('/')
        expect(res.status).toBe(200)
    })
})