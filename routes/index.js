const appRoutes = require('./app.route')

module.exports = (app) => {
    app.use('/', appRoutes)
}