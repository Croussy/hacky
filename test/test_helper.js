const {dbConnect, dbClose} = require('../server/config/db-manager')
const mongoose = require("mongoose");
beforeEach((done) => {
    dbConnect(process.env.DATABASE_TEST).then(() => {
        mongoose.connection.collections.players.drop(() => {
            done();
        })
    })
})
afterEach(function () {
    dbClose()
});
