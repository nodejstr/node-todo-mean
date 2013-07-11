var mongoose = require('mongoose')
    , Schema = mongoose.Schema

mongoose.model('ToDo', new Schema({
    title: {type: String, default: '', trim: true},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
}))
