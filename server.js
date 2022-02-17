const app = require('./server/app')
const {dbConnect} = require('./server/config/db-manager')

const port = 5000

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    dbConnect(process.env.DATABASE)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});