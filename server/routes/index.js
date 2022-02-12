const appRoutes = require('./app.route')
const apiPlayerRoutes = require('./api.player.route')

module.exports = (app) => {
    app.use('/', appRoutes)
    app.use('/api/player', apiPlayerRoutes)
}