'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 07/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _UserService = require('../services/UserService');

var _User = require('../models/User');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _userService = Symbol('userService');
// const user = JSON.parse(fs.readFileSync('models/user.json', 'utf8'));

var UserController = exports.UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);

        this[_userService] = new _UserService.UserService();
    }

    _createClass(UserController, [{
        key: 'registerUser',
        value: function registerUser(request, response) {
            var _this = this;

            if (!request.body.name || !request.body.email || !request.body.password) {
                response.send('please fill all required fields');
            }
            // let user = new User(request.body.name, request.body.email, request.body.password);
            var user = request.body;
            this[_userService].saveUser(user, function (result) {
                if (result) _this.authenticateUser(request, response);else response.send({ 'message': result });;
            });
        }
    }, {
        key: 'findUsers',
        value: function findUsers(request, response) {
            this[_userService].findUsers(function (users) {
                response.send(users);
            });
        }
    }, {
        key: 'findUserById',
        value: function findUserById(request, response) {
            this[_userService].findUserById(request.query.id, function (user) {
                response.send(user);
            });
        }
    }, {
        key: 'updateUser',
        value: function updateUser(request, response) {
            if (!request.body.name || !request.body.email || !request.body.password) {
                response.send('please fill all required fields');
            }
            // let user = new User(request.body.name, request.body.email, request.body.password);
            var user = request.body;
            this[_userService].updateUser(user, request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(request, response) {
            this[_userService].deleteUser(request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }]);

    return UserController;
}();