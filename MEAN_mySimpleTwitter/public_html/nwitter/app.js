var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();
// set app
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//rotas
var routes = require('./routes');
routes.usuario = require('./routes/users');

app.get('/', routes.index);
app.get('/user/login', routes.usuario.login);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});




