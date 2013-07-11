var express = require('express')
    , fs = require('fs')
    , mongoose = require('mongoose')
var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]

mongoose.connect(config.db, {safe: true})
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path + '/' + file)
})


var app = express()
var port = process.env.PORT || 3333
require('./config/express')(app, config)
require('./config/routes')(app)
require('./config/socketio')(app.listen(port))
console.log('Express app started on port ' + port)