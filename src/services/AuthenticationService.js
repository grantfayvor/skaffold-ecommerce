import { PassportJWTService } from "./PassportJWTService";
import { UserService } from "./UserService";
import { app } from '../../config';

const _userService = Symbol('userService'),
    _passportJWT = require('passport-jwt'),
    ExtractJWT = _passportJWT.ExtractJwt,
    JWTStrategy = _passportJWT.Strategy;

export class AuthenticationService {

    constructor(options = { tokenExpiry : null, jwtSecret : null}) {
        this._options = options;
        // this[_userService] = new UserService();
        this._pJWTService = new PassportJWTService();
        this._passport = this._pJWTService.getPassport();
        console.log("in constructor");

        this._passport.use(new JWTStrategy({
            secretOrKey: this._options.jwtSecret || app.jwtSecret,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true
        }, (payload, done) => {
            // this.jwtStrategyConfirmUser(payload, done);
            this.verifyUser(payload, done);
        }));
    }

    authenticate() {
        return this._passport.authenticate('jwt', {
            successRedirect: '/',
            failureRedirect : '/login',
            session: false
        });
    }

    verifyUser(payload, callback) {
        UserService.confirmUserDetails(payload, user => {
            if (user !== false) {
                let token = _jwt.sign({
                    id: user.id,
                    email: user.email,
                    exp: this._options.tokenExpiry || Math.floor(new Date() / 1000) + (60 * 60)
                }, this._options.jwtSecret || app.jwtSecret);
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
}
