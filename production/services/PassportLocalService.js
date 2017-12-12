'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PassportLocalService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserService = require('./UserService');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    _userService = new _UserService.UserService();

var PassportLocalService = exports.PassportLocalService = function () {
    function PassportLocalService() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            fields: {
                usernameField: 'email',
                passwordField: 'password'
            }, behaviour: {
                successRedirect: '/',
                failureRedirect: '/login',
                session: true
            }
        };

        _classCallCheck(this, PassportLocalService);

        this._passport = passport;
        this._fields = options.fields;
        this._behaviour = options.behaviour;
        this.config();
    }

    _createClass(PassportLocalService, [{
        key: 'config',
        value: function config() {
            this._passport.use(new LocalStrategy({
                usernameField: this._fields.usernameField,
                passwordField: this._fields.passwordField
            }, function (username, password, done) {
                _userService.confirmUserDetails(username, password, done);
            }));
            this._passport.serializeUser(function (user, done) {
                done(null, user.id);
            });
            this._passport.deserializeUser(function (userId, done) {
                _userService.findUserById(userId, function (user) {
                    done(null, user);
                });
            });
        }
    }]);

    return PassportLocalService;
}();