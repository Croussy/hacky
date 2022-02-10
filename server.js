const app = require('./app')
const dotenv = require('dotenv')
const {dbConnect} = require('./config/db-manager')
dotenv.config({path: './config/.env'});


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