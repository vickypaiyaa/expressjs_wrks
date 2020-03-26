var express = require('express');
var app = express();

var dateFile = require('../data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res) {
    res.send(`
    <h1>Welcome</h1>
    <p>To the express world </p>
    `)
});

app.get('/speakers', function(req,res) {
    var info = '';
    dateFile.speakers.forEach(function(item) {
        info += `
        <li>
            <h2>${item.name}</h2>
        <p>${item.summary}</p>
        </li>
        `;
    });
    res.send(`<h1>Meeting</h1>${info}`)
});

app.get('/speakers/:speakerid', function(req,res) {
    var speaker = dateFile.speakers[req.params.speakerid];
    res.send(`
        <h2>${speaker.title}</h2>
        <h3>${speaker.name}</h3>
        <p>${speaker.summary}</p>
        `)
});

app.get('/', function(req,res,next) {
    res.send('<h2>Test Page</h2>')
});

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port '+app.get('port'));
})


// var http = require('http');
// // var express = require('express');

// var myserver = http.createServer(function(req,res) {
//     res.writeHead(200, {"content-type":'text/html'});
//     res.write('<h1>Meetup</h1>');
//     res.end();
// });

// myserver.listen(3002);
// console.log('Application listening on port 3002');