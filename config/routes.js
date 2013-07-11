var controller = require('../app/controllers/controller')
module.exports = function (app) {
    app.get('/getAll', controller.getAll)
    app.post('/add', controller.add)
    app.get('*', controller.index)
}