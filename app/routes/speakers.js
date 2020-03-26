var express = require('express');
var router = express.Router();

router.get('/speakers', function(req,res) {
    var info = '';
    var dateFile = req.app.get('appData');
    dateFile.speakers.forEach(function(item) {
        info += `
        <li>
            <h2>${item.name}</h2>
            <img src = "/images/speakers/${item.shortname}_tn.jpg" alt="background">
            <p>${item.summary}</p>
        </li>
        `;
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Meeting</h1>
    ${info}
    `)
});

router.get('/speakers/:speakerid', function(req,res) {
    var dateFile = req.app.get('appData');
    var speaker = dateFile.speakers[req.params.speakerid];
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <h2>${speaker.title}</h2>
        <img src = "/images/speakers/${speaker.shortname}_tn.jpg" alt="background">
        <h3>${speaker.name}</h3>
        <p>${speaker.summary}</p>
        `)
});

module.exports = router;