"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
router.get('/login', function (req, res, next) {
    res.render('login', {
        title: 'Express Login'
    });
});
router.post('/login', function (req, res, next) {
    if (req.body.username.length > 0) {
        req.session['username'] = req.body.username;
        res.redirect('/');
    }
    else {
        res.render('login', {
            title: 'Express',
            ErrorMessage: 'Please enter a user name'
        });
    }
});
