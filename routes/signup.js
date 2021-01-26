"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var mysql = require("mysql");
var dbconfig = require("../config/database");
var router = express.Router();
exports.router = router;
var connection = mysql.createConnection(dbconfig);
router.get('/signup', function (req, res, next) {
    res.render('signup', {
        title: 'SignUp'
    });
});
router.post('/signup', function (req, res, next) {
    connection.query('INSERT INTO `user` (`id`, `password`, `name`, `phone`) VALUES ' +
        "('" + req.body.id + "', '" + req.body.password + "', '" + req.body.name + "', '" + req.body.phone + "')", function (error, rows) {
        if (error)
            throw error;
        console.log('New User info is: ', rows);
        res.send(rows);
    });
});
