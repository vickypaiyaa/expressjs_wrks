var express = require('express');
var router = express.Router();

router.get('/speakers', function(req,res) {
    //console.log(req.app);
    debugger;
    var data = req.app.get('appData');
    console.log(data);
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos, 
        speakers: pageSpeakers,
        pageID: 'speakersList'
    });
});

router.get('/speakers/:speakerid', function(req,res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = [];

    data.speakers.forEach(function(item) {
        if(item.shortname == req.params.speakerid) {
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });

    res.render('speakers', {
        pageTitle: 'Speakers Information',
        artwork: pagePhotos, 
        speakers: pageSpeakers,
        pageID: 'speakerDetail'
    });
});

module.exports = router;