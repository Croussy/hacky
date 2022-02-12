const appRoutes = require('./app.route')
const apiPlayerRoutes = require('./api.player.route')
const apiGameRoutes = require('./api.game.route')

module.exports = (app) => {
    app.use('/', appRoutes)
    app.use('/api/player', apiPlayerRoutes)
    app.use('/api/game', apiGameRoutes)
}