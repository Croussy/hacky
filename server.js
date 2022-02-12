const app = require('./server/app')
const {dbConnect} = require('./server/config/db-manager')


const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
    dbConnect(process.env.DATABASE)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});