/**
 * Created by Harrison on 06/12/2017.
 * abstract repository used by the application.
 */

import { Database } from '../config/Database';

const _tableName = Symbol('tableName'),
    _chalk = require('chalk'),
    _successNotifier = _chalk.bold.green,
    _errorNotifier = _chalk.bold.red;

export class CRUDRepository {

    constructor(tableName) {
        this._connection = Database.getConnection();
        this[_tableName] = tableName;
    }

    save(model, callback) {
        let sql = "INSERT INTO " + this[_tableName] + " SET ?";
        this._connection.query(sql, model.toJson(), (error, connection) => {
            if (error) {
                console.log(_errorNotifier("product could not be added to database"));
                console.log(_errorNotifier(error));
                callback(false);
            } else {
                console.log(_successNotifier("product was successfully inserted"));
                callback(true);
            }
        });
    }

    update(model, id, callback) {
        let sql = "UPDATE " + this[_tableName] + " SET ? WHERE id = ?";
        this._connection.query(sql, [model.toJson(), id], (error, connection) => {
            if (error) {
                console.log(_errorNotifier("product could not be updated in database"));
                console.log(_errorNotifier(error));
                callback(false);
            } else {
                console.log(_successNotifier("product was successfully updated"));
                callback(true);
            }
        });
    }

    delete(id, callback) {
        let sql = "DELETE FROM " + this[_tableName] + " WHERE id = ?";
        this._connection.query(sql, [id], (error, connection) => {
            if (error) {
                console.log(_errorNotifier("product could not be updated in database"));
                console.log(_errorNotifier(error));
                callback(false);
            } else {
                console.log(_successNotifier("product was successfully deleted"));
                callback(true);
            }
        });
    }

    findAll(callback) {
        let sql = "SELECT * FROM " + this[_tableName];
        this._connection.query(sql, [], (error, result, fields) => {
            if (error) throw error;
            callback(result);
        });
    }

    findById(id, callback) {
        let sql = "SELECT * FROM " + this[_tableName] + " WHERE id = ?";
        this._connection.query(sql, [id], (error, result, fields) => {
            if (error) throw error;
            callback(result);
        });
    }

    findByParam(paramName, paramValue, callback) {
        let sql = "SELECT * FROM " + this[_tableName] + " WHERE " + paramName + " = ?";
        this._connection.query(sql, paramValue, (error, result, fields) => {
            if (error) throw error;
            callback(result);
        });
    }

}