'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Harrison on 05/12/2017.
 * es6 version for server.js. bootstraps the application
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    _chalk = require('chalk'),
    _config = require('./config'),
    _cookieParser = require('cookie-parser'),
    _session = require('express-session'),
    _csrf = require('csurf'),
    _notifier = _chalk.bold.blue;

var Database = require('./production/config/Database');
var PLS = require('./production/services/PassportLocalService'); //to remove

var app = exports.app = express();

var csrfProtection = exports.csrfProtection = _csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });
var _passportLocalService = exports._passportLocalService = new PLS.PassportLocalService(); //to remove
var _passport = _passportLocalService._passport; //to remove
var _authBehaviour = _passportLocalService._behaviour; //to remove

app.use(_session({ secret: 'love <3', resave: true, saveUninitialized: true }));
app.use(_cookieParser());
// app.use(csrfProtection); put back when all is ready
app.use(bodyParser.json());
// app.use(_passport.initialize()); //to remove
// app.use(_passport.session()); //to remove

var promise = new Promise(function (resolve, reject) {
    var server = app.listen(9000, function () {
        console.log(_notifier("> server listening at http://" + server.address().address + ":" + server.address().port));
    });
}).then(new Database.Database()).then(require('./production/config/routes'));

exports.UserService = require('./production/services/UserService').UserService;
