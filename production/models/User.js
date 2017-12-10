'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Harrison on 07/12/2017.
 */

var _name = Symbol('name'),
    _email = Symbol('email'),
    _password = Symbol('password');

var User = exports.User = function () {
    function User(name, email, password) {
        _classCallCheck(this, User);

        this[_name] = name;
        this[_email] - email;
        this[_password] = password;
    }

    _createClass(User, [{
        key: 'getName',
        value: function getName() {
            return this[_name];
        }
    }, {
        key: 'getEmail',
        value: function getEmail() {
            return this[_email];
        }
    }, {
        key: 'getPrice',
        value: function getPrice() {
            return this[_price];
        }
    }, {
        key: 'getFields',
        value: function getFields() {
            return ['name', 'email', 'password'];
        }
    }, {
        key: 'toJson',
        value: function toJson() {
            return {
                'name': this[_name],
                'email': this[_email],
                'password': this[_password]
            };
        }
    }]);

    return User;
}();