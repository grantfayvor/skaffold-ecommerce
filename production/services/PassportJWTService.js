'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PassportJWTService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //TODO work on authentication using jwt also check livi's school information system repo on github

var _config = require('../../config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _passport = require('passport'),
    _passportJWT = require('passport-jwt'),
    ExtractJWT = _passportJWT.ExtractJwt,
    JWTStrategy = _passportJWT.Strategy;

var PassportJWTService = exports.PassportJWTService = function () {
    function PassportJWTService() {
        _classCallCheck(this, PassportJWTService);

        _passport.initialize();
    }

    _createClass(PassportJWTService, [{
        key: 'authenticate',
        value: function authenticate() {
            return _passport.authenticate('jwt', {
                successRedirect: '/',
                failureRedirect: '/login',
                session: false
            });
        }
    }, {
        key: 'jwtStrategyConfirmUser',
        value: function jwtStrategyConfirmUser(payload, done) {
            var user = payload || null;
            if (user) {
                return done(null, {
                    id: payload.id,
                    email: payload.email,
                    name: payload.name
                });
            } else {
                return done(new Error("User not found"), null);
            }
        }
    }, {
        key: 'getPassport',
        value: function getPassport() {
            return _passport;
        }

        // passport.use(new JWTStrategy({
        //     secretOrKey: "secret",
        //     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        //     ignoreExpiration: true
        // }, function (jwt_payload, done) {
        //     console.log(jwt_payload);
        //     userService.findOneUserByParam('id', jwt_payload.sub, function (user) {
        //         console.log(user);
        //         if (!user) return done(new Error("invalid details"));
        //         return done(null, user);
        //     });
        // }));

    }]);

    return PassportJWTService;
}();