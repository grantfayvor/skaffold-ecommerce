/**
 * Created by Harrison on 05/12/2017.
 * es6 version for server.js. bootstraps the application
 */

const express = require('express'),
    bodyParser = require('body-parser'),
    _chalk = require('chalk'),
    _config = require('./config'),
    _notifier = _chalk.bold.blue;

import { Database } from './production/config/Database';

export const app = express();

app.use(bodyParser.json());

let promise = new Promise((resolve, reject) => {
    const server = app.listen(9000, () => {
        console.log(_notifier("  \\\\====/\\====//"));
        console.log(_notifier("  =\\\\==//\\\\==//"));
        console.log(_notifier("  ==\\\\//==\\\\//"));
        console.log(_notifier("  ===\\/====\\/"));
        console.log(_notifier("> server listening at http://"
            + server.address().address + ":" + server.address().port + " ___________ . . ."));
    });
}).then(new Database())
    .then((_config.app.es6) ? require('./src/config/routes') : require('./production/config/routes'));
