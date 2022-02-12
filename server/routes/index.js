const appRoutes = require('./app.route')
const apiPlayerRoutes = require('./api.player.route')
const apiGameRoutes = require('./api.game.route')
const apiMissionRoutes = require('./api.mission.route')

module.exports = (app) => {
    app.use('/', appRoutes)
    app.use('/api/player', apiPlayerRoutes)
    app.use('/api/game', apiGameRoutes)
    app.use('/api/mission', apiMissionRoutes)
}