var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/load', function(req, res, next) {
    res.json({message: 'Hello world!'});
});

router.post('/save', function(req, res, next) {
    console.log(req.body.message);
    res.sendStatus(200)
});

module.exports = router;
