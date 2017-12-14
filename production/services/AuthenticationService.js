'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    _fields = Symbol('fields'),
    _config = Symbol('config');

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
        var confirmUserDetails = arguments[1];
        var deserializer = arguments[2];

        _classCallCheck(this, PassportLocalService);

        this._passport = passport;
        this[_fields] = options.fields;
        this._behaviour = options.behaviour;
        this[_confirmUserDetails] = confirmUserDetails;
        this[_deserializer] = deserializer;
        this[_config]();
    }

    _createClass(PassportLocalService, [{
        key: _config,
        value: function value() {
            var confirmUserDetails = this[_confirmUserDetails];
            var deserializer = this[_deserializer];
            this._passport.use(new LocalStrategy({
                usernameField: this[_fields].usernameField,
                passwordField: this[_fields].passwordField
            }, function (username, password, done) {
                confirmUserDetails(username, password, done);
            }));
            if (this._behaviour.session) {
                this._passport.serializeUser(function (user, done) {
                    done(null, user.id);
                });
                this._passport.deserializeUser(function (userId, done) {
                    deserializer(userId, function (user) {
                        done(null, user);
                    });
                });
            }
        }
    }]);

    return PassportLocalService;
}();

var _passport = require('passport'),
    _passportJWT = require('passport-jwt'),
    ExtractJWT = _passportJWT.ExtractJwt,
    JWTStrategy = _passportJWT.Strategy;

var PassportJWTService = exports.PassportJWTService = function () {
    function PassportJWTService() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            fields: {
                usernameField: 'email',
                passwordField: 'password'
            }, behaviour: {
                successRedirect: '/',
                failureRedirect: '/login',
                session: true,
                secretOrKey: 'secret'
            }
        };
        var confirmUserDetails = arguments[1];
        var deserializer = arguments[2];

        _classCallCheck(this, PassportJWTService);

        this._passport = passport;
        this._fields = options.fields;
        this._behaviour = options.behaviour;
        this.confirmUserDetails = confirmUserDetails;
        this.deserializer = deserializer;
        this.config();
    }

    _createClass(PassportJWTService, [{
        key: 'config',
        value: function config() {
            var confirmUserDetails = this.confirmUserDetails;
            var deserializer = this.deserializer;
            this._passport.use(new JWTStrategy({
                secretOrKey: this._behaviour.secretOrKey,
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: true
            }, function (payload, done) {
                confirmUserDetails(payload, done);
            }));
            if (this._behaviour.session) {
                this._passport.serializeUser(function (user, done) {
                    done(null, user.id);
                });
                this._passport.deserializeUser(function (userId, done) {
                    deserializer(userId, function (user) {
                        done(null, user);
                    });
                });
            }
        }
    }]);

    return PassportJWTService;
}();