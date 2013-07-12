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
    console.log(JSON.stringify(todo))

    todo.save(function (err) {
        if (err)
            res.json(err)
        else
            res.json({success: true, todo: todo})
    })
}
exports.update = function (req, res) {
    var todoParam = req.body;
    //console.log(JSON.stringify(todo))

    ToDo.findOne({_id:todoParam._id},function(err,item){

        if(err)
        {
            res.json(err)
        }
        else
        {
            item.completed = todoParam.completed
            item.title = todoParam.title

            item.save(function (err) {
                if (err)
                    res.json(err)
                else
                    res.json({success: true, todo: item})
            })
        }
    });


}
exports.del = function (req, res) {
    var todo = new ToDo(req.body);
    todo.remove(function (err) {
        if (err)
            res.json(err)
        else
            res.json({success: true})
    })
}