"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var index = require("./routes/index");
var login = require("./routes/login");
var signup = require("./routes/signup");
var path = require("path");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: '',
    resave: false,
    saveUninitialized: true
}));
app.use('/', index.router);
app.use('/', login.router);
app.use('/', signup.router);
app.listen(3000, function () {
    console.log('listenling on port 3000');
});
