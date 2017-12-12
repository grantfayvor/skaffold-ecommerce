"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthenticationService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PassportJWTService = require("./PassportJWTService");

var _UserService = require("./UserService");

var _config = require("../../config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _userService = Symbol('userService'),
    _passportJWT = require('passport-jwt'),
    ExtractJWT = _passportJWT.ExtractJwt,
    JWTStrategy = _passportJWT.Strategy;

var AuthenticationService = exports.AuthenticationService = function () {
    function AuthenticationService() {
        var _this = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { tokenExpiry: null, jwtSecret: null };

        _classCallCheck(this, AuthenticationService);

        this._options = options;
        // this[_userService] = new UserService();
        this._pJWTService = new _PassportJWTService.PassportJWTService();
        this._passport = this._pJWTService.getPassport();
        console.log("in constructor");

        this._passport.use(new JWTStrategy({
            secretOrKey: this._options.jwtSecret || _config.app.jwtSecret,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true
        }, function (payload, done) {
            // this.jwtStrategyConfirmUser(payload, done);
            _this.verifyUser(payload, done);
        }));
    }

    _createClass(AuthenticationService, [{
        key: "authenticate",
        value: function authenticate() {
            return this._passport.authenticate('jwt', {
                successRedirect: '/',
                failureRedirect: '/login',
                session: false
            });
        }
    }, {
        key: "verifyUser",
        value: function verifyUser(payload, callback) {
            var _this2 = this;

            _UserService.UserService.confirmUserDetails(payload, function (user) {
                if (user !== false) {
                    var token = _jwt.sign({
                        id: user.id,
                        email: user.email,
                        exp: _this2._options.tokenExpiry || Math.floor(new Date() / 1000) + 60 * 60
                    }, _this2._options.jwtSecret || _config.app.jwtSecret);
                    console.log("success");
                    console.log(token);
                    return callback({ token: token });
                } else {
                    console.log("either user not found or password not match");
                    return callback(null);
                }
            });
        }

        // confirmUserDetails(username, password, callback) {
        //     this[_userService].findOneUserByParam('email', username, user => {
        //         if (!user[0]) return callback(false);
        //         if (!_bcrypt.compareSync(password, user[0].password)) {
        //             return callback(false);
        //         }
        //         return callback(user[0]);
        //     });
        // }

    }]);

    return AuthenticationService;
}();