'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._authBehaviour = exports._passport = exports.app = undefined;

var _Database = require('./production/config/Database');

var _PassportLocalService = require('./production/services/PassportLocalService');

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

var app = exports.app = express();

var csrfProtection = _csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });
var _passportLocalService = new _PassportLocalService.PassportLocalService();
var _passport = exports._passport = _passportLocalService._passport;
var _authBehaviour = exports._authBehaviour = _passportLocalService._behaviour;

app.use(_session({ secret: 'love <3', resave: true, saveUninitialized: true }));
app.use(_cookieParser());
// app.use(csrfProtection);
app.use(bodyParser.json());
app.use(_passport.initialize());
app.use(_passport.session());

var promise = new Promise(function (resolve, reject) {
    var server = app.listen(9000, function () {
        console.log(_notifier("  \\\\====/\\====//"));
        console.log(_notifier("  =\\\\==//\\\\==//"));
        console.log(_notifier("  ==\\\\//==\\\\//"));
        console.log(_notifier("  ===\\/====\\/"));
        console.log(_notifier("> server listening at http://" + server.address().address + ":" + server.address().port + " ___________ . . ."));
    });
}).then(new _Database.Database()).then(_config.app.es6 ? require('./src/config/routes') : require('./production/config/routes'));
