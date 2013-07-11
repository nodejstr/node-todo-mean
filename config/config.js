module.exports = {
    development: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'ToDoNodeJS'
        },
        db: 'mongodb://127.0.0.1/todo'
    }
}
