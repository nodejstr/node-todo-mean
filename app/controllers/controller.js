var mongoose = require('mongoose')
    , ToDo = mongoose.model('ToDo')

exports.index = function (req, res) {
    ToDo.find().exec(function (err, result) {
        if (err)
            res.render('index', {todos: []})
        else
            res.render('index', {todos: result})
    })
}

exports.getAll = function (req, res) {
    ToDo.find().exec(function (err, result) {
        if (err)
            res.json(err)
        else
            res.json(result)
    })
}

exports.add = function (req, res) {
    var todo = new ToDo(req.body);
    todo.save(function (err) {
        if (err)
            res.json(err)
        else
            res.json({success: true})
    })
}

