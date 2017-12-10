'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 07/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _UserRepository = require('../repositories/UserRepository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _repository = Symbol('repository');

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);

        this[_repository] = new _UserRepository.UserRepository();
    }

    _createClass(UserService, [{
        key: 'authenticateUser',
        value: function authenticateUser(username, password, callback) {}
    }, {
        key: 'saveUser',
        value: function saveUser(user, callback) {
            this[_repository].save(user, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findUsers',
        value: function findUsers(callback) {
            this[_repository].findAll(function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findUserById',
        value: function findUserById(id, callback) {
            this[_repository].findById(id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findUserByParam',
        value: function findUserByParam(paramName, paramValue, callback) {
            this[_repository].findByParam(paramName, paramValue, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user, id, callback) {
            this[_repository].update(user, id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(id, callback) {
            this[_repository].delete(id, function (result) {
                callback(result);
            });
        }
    }]);

    return UserService;
}();