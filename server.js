const app = require('./server/app')
const {dbConnect} = require('./server/config/db-manager')


const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log("clément", "[process.env.NODE_ENV]", process.env.NODE_ENV);

    const mongo_uri = process.env.NODE_ENV === "Testing" ? process.env.DATABASE_TEST : process.env.DATABASE
    dbConnect(mongo_uri)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});