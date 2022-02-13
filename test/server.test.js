const app = require('../server/app')
const supertest = require('supertest')
const request = supertest(app)

describe("/ endpoint", () => {
    it("Should return a response 200", (done) => {
        request.get('/')
            .expect(200)
            .end((err) => {
                if(err) throw err
                done()
            })
    })
})