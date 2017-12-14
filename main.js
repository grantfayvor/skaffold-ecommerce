/**
 * Created by Harrison on 05/12/2017.
 * es6 version for server.js. bootstraps the application
 */

const express = require('express'),
    bodyParser = require('body-parser'),
    _chalk = require('chalk'),
    _config = require('./config'),
    _cookieParser = require('cookie-parser'),
    _session = require('express-session'),
    _csrf = require('csurf'),
    _notifier = _chalk.bold.blue;

import { Database } from /* (_config.app.es6) ? './src/config/Database' : */ './production/config/Database';
import { PassportLocalService } from /* (_config.app.es6) ? './src/services/PassportLocalService' : */ './production/services/PassportLocalService';

export const app = express();

const csrfProtection = _csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });
const _passportLocalService = new PassportLocalService();
export const _passport = _passportLocalService._passport;
export const _authBehaviour = _passportLocalService._behaviour;

app.use(_session({ secret: 'love <3', resave: true, saveUninitialized: true }));
app.use(_cookieParser());
// app.use(csrfProtection);
app.use(bodyParser.json());
app.use(_passport.initialize());
app.use(_passport.session());

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
