'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Database = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 05/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * defines the database connection for the application.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _constants = require('../config/constants.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _mysql = require('mysql'),
    _chalk = require('chalk'),
    _connection = Symbol('connection'),
    _connect = Symbol('connect'),
    _mysqlConnect = Symbol('mysqlConnect'),
    _createDatabase = Symbol('createDatabase'),
    _useDatabase = Symbol('useDatabase'),
    _createTables = Symbol('createTables'),
    _errorNotifier = _chalk.bold.red,
    _successNotifier = _chalk.bold.green,
    _notifier = _chalk.bold.blue;

var Database = exports.Database = function () {
    function Database() {
        _classCallCheck(this, Database);

        this[_connection] = _mysql.createConnection(_constants.constants.database);
        this[_connect]();
    }

    _createClass(Database, [{
        key: _connect,
        value: function value() {
            var _this = this;

            var promise = new Promise(function (resolve, reject) {
                return _this[_mysqlConnect]();
            }).then(this[_createDatabase]()).then(this[_useDatabase]()).then(this[_createTables]());
        }
    }, {
        key: _mysqlConnect,
        value: function value() {
            this[_connection].connect(function (error) {
                if (error) {
                    console.log(_errorNotifier("> could not connect to mysql"));
                    throw error;
                }
                console.log(_notifier("> initializing database ___________ . . ."));
                console.log(_successNotifier("> mysql connected ..."));
            });
        }
    }, {
        key: _createDatabase,
        value: function value() {
            this[_connection].query("CREATE DATABASE IF NOT EXISTS " + _constants.constants.database.name, function (error, result) {
                if (error) {
                    console.log(_errorNotifier("> could not create database " + _constants.constants.database.name));
                    throw error;
                }
                console.log(_successNotifier("> database is ready ..."));
            });
        }
    }, {
        key: _useDatabase,
        value: function value() {
            this[_connection].query("USE " + _constants.constants.database.name, function (error, result) {
                if (error) {
                    console.log(_errorNotifier("> could not connect to database " + _constants.constants.database.name));
                    throw error;
                }
                console.log(_successNotifier("> using table " + _constants.constants.database.name + " ..."));
            });
        }
    }, {
        key: _createTables,
        value: function value() {
            var _this2 = this;

            var sql = "CREATE TABLE IF NOT EXISTS users(id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT," + "name VARCHAR(120), email VARCHAR(120), password VARCHAR(120))";
            this[_connection].query(sql, function (error, result) {
                if (error) {
                    console.log(_errorNotifier("> users table was not created"));
                    throw error;
                }
                sql = "CREATE TABLE IF NOT EXISTS products(id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT," + " name VARCHAR(120), brand VARCHAR(120), price VARCHAR(50))";
                _this2[_connection].query(sql, function (error, result) {
                    if (error) {
                        console.log(_errorNotifier("> products table was not created"));
                        throw error;
                    }
                    console.log(_successNotifier("> tables are ready ..."));
                    console.log(_successNotifier("> application is ready ;)"));
                });
            });
        }
    }], [{
        key: 'getConnection',
        value: function getConnection() {
            this[_connection] = _mysql.createConnection(_constants.constants.database);
            this[_connection].query("USE " + _constants.constants.database.name, function (error, result) {
                if (error) {
                    console.log(_errorNotifier("> could not use database " + _constants.constants.database.name + " while trying to get current connection"));
                    throw error;
                }
            });
            return this[_connection];
        }
    }]);

    return Database;
}();