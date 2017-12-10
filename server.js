'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _config = require('./config');

var _Database = require('./production/config/Database');

/**
 * Created by Harrison on 05/12/2017.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    _chalk = require('chalk'),
    _notifier = _chalk.bold.blue;

var app = exports.app = express();

app.use(bodyParser.json());

var promise = new Promise(function (resolve, reject) {
    var server = app.listen(9000, function () {
        console.log(_notifier("  \\\\====/\\====//"));
        console.log(_notifier("  =\\\\==//\\\\==//"));
        console.log(_notifier("  ==\\\\//==\\\\//"));
        console.log(_notifier("  ===\\/====\\/"));
        console.log(_notifier("> server listening at http://" + server.address().address + ":" + server.address().port + " ___________ . . ."));
    });
}).then(new _Database.Database()).then(_config.config.app.es6 ? require('./src/config/routes') : require('./production/config/routes'));