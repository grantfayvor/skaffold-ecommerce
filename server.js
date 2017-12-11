'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseForm = exports.csrfProtection = exports.app = undefined;

var _Database = require('./production/config/Database');

/**
 * Created by Harrison on 05/12/2017.
 * es6 version for server.js. bootstraps the application
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    _chalk = require('chalk'),
    _config = require('./config'),
    _cookieParser = require('cookie-parser'),
    _csrf = require('csurf'),
    _notifier = _chalk.bold.blue;

var app = exports.app = express();

var csrfProtection = exports.csrfProtection = _csrf({ cookie: true });
var parseForm = exports.parseForm = bodyParser.urlencoded({ extended: false });

app.use(_cookieParser());
app.use(bodyParser.json());

var promise = new Promise(function (resolve, reject) {
    var server = app.listen(9000, function () {
        console.log(_notifier("  \\\\====/\\====//"));
        console.log(_notifier("  =\\\\==//\\\\==//"));
        console.log(_notifier("  ==\\\\//==\\\\//"));
        console.log(_notifier("  ===\\/====\\/"));
        console.log(_notifier("> server listening at http://" + server.address().address + ":" + server.address().port + " ___________ . . ."));
    });
}).then(new _Database.Database()).then(_config.app.es6 ? require('./src/config/routes') : require('./production/config/routes'));

// export { csrfProtection, parseForm, app }
