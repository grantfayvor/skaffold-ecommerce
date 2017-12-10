'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CRUDRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 06/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * abstract repository used by the application.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Database = require('../config/Database');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _tableName = Symbol('tableName'),
    _chalk = require('chalk'),
    _successNotifier = _chalk.bold.green,
    _errorNotifier = _chalk.bold.red;

var CRUDRepository = function () {
    function CRUDRepository(tableName) {
        _classCallCheck(this, CRUDRepository);

        this._connection = _Database.Database.getConnection();
        this[_tableName] = tableName;
    }

    _createClass(CRUDRepository, [{
        key: 'save',
        value: function save(model, callback) {
            var sql = "INSERT INTO " + this[_tableName] + " SET ?";
            this._connection.query(sql, model.toJson(), function (error, connection) {
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
    }, {
        key: 'update',
        value: function update(model, id, callback) {
            var sql = "UPDATE " + this[_tableName] + " SET ? WHERE id = ?";
            this._connection.query(sql, [model.toJson(), id], function (error, connection) {
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
    }, {
        key: 'delete',
        value: function _delete(id, callback) {
            var sql = "DELETE FROM " + this[_tableName] + " WHERE id = ?";
            this._connection.query(sql, [id], function (error, connection) {
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
    }, {
        key: 'findAll',
        value: function findAll(callback) {
            var sql = "SELECT * FROM " + this[_tableName];
            this._connection.query(sql, [], function (error, result, fields) {
                if (error) throw error;
                callback(result);
            });
        }
    }, {
        key: 'findById',
        value: function findById(id, callback) {
            var sql = "SELECT * FROM " + this[_tableName] + " WHERE id = ?";
            this._connection.query(sql, [id], function (error, result, fields) {
                if (error) throw error;
                callback(result);
            });
        }
    }, {
        key: 'findByParam',
        value: function findByParam(paramName, paramValue, callback) {
            var sql = "SELECT * FROM " + this[_tableName] + " WHERE " + paramName + " = ?";
            this._connection.query(sql, paramValue, function (error, result, fields) {
                if (error) throw error;
                callback(result);
            });
        }
    }]);

    return CRUDRepository;
}();

exports.CRUDRepository = CRUDRepository;