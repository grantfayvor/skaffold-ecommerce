/**
 * Created by Harrison on 05/12/2017.
 */

import { constants } from '../config/constants.js';

const _mysql = require('mysql'),
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

class Database {

    constructor() {
        this[_connection] = _mysql.createConnection(constants.database);
        this[_connect]();
    }

    [_connect]() {
        let promise = new Promise((resolve, reject) => this[_mysqlConnect]())
            .then(this[_createDatabase]())
            .then(this[_useDatabase]())
            .then(this[_createTables]());
    }

    [_mysqlConnect]() {
        this[_connection].connect(error => {
            if (error) {
                console.log(_errorNotifier("> could not connect to mysql"));
                throw error;
            }
            console.log(_notifier("> initializing database ___________ . . ."));
            console.log(_successNotifier("> mysql connected ..."));
        });
    }

    [_createDatabase]() {
        this[_connection].query("CREATE DATABASE IF NOT EXISTS " + constants.database.name, (error, result) => {
            if (error) {
                console.log(_errorNotifier("> could not create database " + constants.database.name));
                throw error;
            }
            console.log(_successNotifier("> database is ready ..."));
        });
    }

    [_useDatabase]() {
        this[_connection].query("USE " + constants.database.name, (error, result) => {
            if (error) {
                console.log(_errorNotifier("> could not connect to database " + constants.database.name));
                throw error;
            }
            console.log(_successNotifier("> using table " + constants.database.name + " ..."));
        });
    }

    [_createTables]() {
        let sql = "CREATE TABLE IF NOT EXISTS products(id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,"
            + " name VARCHAR(120), brand VARCHAR(120), price VARCHAR(50))";
        this[_connection].query(sql, (error, result) => {
            if (error) {
                console.log(_errorNotifier("> products table was not created"));
                throw error;
            }
            console.log(_successNotifier("> tables are ready ..."));
            console.log(_successNotifier("> application is ready ;)"));
        });
    }

    static getConnection() {
        this[_connection] = _mysql.createConnection(constants.database);
        this[_connection].query("USE " + constants.database.name, (error, result) => {
            if (error) {
                console.log(_errorNotifier("> could not use database " + constants.database.name
                    + " while trying to get current connection"));
                throw error;
            }
        });
        return this[_connection];
    }
}

export { Database }
