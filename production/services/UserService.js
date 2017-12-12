'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 07/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _UserRepository = require('../repositories/UserRepository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _bcrypt = require('bcrypt'),
    _repository = Symbol('repository');

var UserService = exports.UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);

        this[_repository] = new _UserRepository.UserRepository();
    }

    _createClass(UserService, [{
        key: 'confirmUserDetails',
        value: function confirmUserDetails(username, password, callback) {
            this.findOneUserByParam('email', username, function (user) {
                if (!user[0]) return callback(new Error("invalid login details"), false);
                if (!_bcrypt.compareSync(password, user[0].password)) {
                    return callback(new Error("invalid login details"), false);
                }
                return callback(null, user[0]);
            });
        }
    }, {
        key: 'saveUser',
        value: function saveUser(user, callback) {
            user.setPassword(_bcrypt.hashSync(user.getPassword(), 10));
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
        key: 'findOneUserByParam',
        value: function findOneUserByParam(paramName, paramValue, callback) {
            this[_repository].findOneByParam(paramName, paramValue, function (result) {
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