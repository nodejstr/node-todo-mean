module.exports = function (server) {
    var io = require("socket.io").listen(server);
    io.sockets.on('connection', function (socket) {
        socket.on('addComment', function (data) {

        });
        socket.on('addUser',function(data){

        })
    });
}