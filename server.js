const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path: './config/.env'});


const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});