/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('pianke');
});

module.exports = router;
