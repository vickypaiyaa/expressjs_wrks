'use strict';
// @ts-ignore
var express = require('express');
//var reload = require('reload');
var app = express();
var dateFile = require('../data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dateFile);
app.set('view engine','ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Welcome Meetups';
app.locals.allSpeakers = dateFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

app.get('/', function(req,res,next) {
    res.send('<h2>Test Page</h2>')
});

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port '+app.get('port'));
});

//reload(server, app);

// var http = require('http');
// // var express = require('express');

// var myserver = http.createServer(function(req,res) {
//     res.writeHead(200, {"content-type":'text/html'});
//     res.write('<h1>Meetup</h1>');
//     res.end();
// });

// myserver.listen(3002);
// console.log('Application listening on port 3002');