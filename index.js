/**
 * Created by Harrison on 05/12/2017.
 * es6 version for server.js. bootstraps the application
 */

var express = require('express'),
bodyParser = require('body-parser'),
_cookieParser = require('cookie-parser'),
_session = require('express-session'),
_chalk = require('chalk'),
_csrf = require('csurf'),
_notifier = _chalk.bold.blue,
ProductController = require('./production/controllers/ProductController').ProductController,
UserController = require('./production/controllers/UserController').UserController,
CartController = require('./production/controllers/CartController').CartController;


var Database = require('./production/config/Database');

var app = express();

var csrfProtection = _csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

app.use(_session({ secret: 'love <3', resave: true, saveUninitialized: true }));
app.use(_cookieParser());
// app.use(csrfProtection); put back when all is ready
app.use(bodyParser.json());
app.use(express.static('public'));

var promise = new Promise((resolve, reject) => {
var server = app.listen(9000, () => {
    console.log(_notifier("> server listening at http://" + server.address().address + ":" + server.address().port));
});
}).then(new Database.Database());

exports.app = app;
exports.csrfProtection = csrfProtection;
exports.UserService = require('./production/services/UserService').UserService;
exports.ProductController = ProductController;
exports.UserController = UserController;
exports.CartController = CartController;


