var express = require('express');
var router = express.Router();

router.get('/speakers', function(req,res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos, 
        speakers: pageSpeakers,
        pageID: 'speakers '
    });
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