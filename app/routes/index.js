var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.send(`
    <h1>Welcome</h1>
    <p>To the express world </p>
    `)
});

module.exports = router;