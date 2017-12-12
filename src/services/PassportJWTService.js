//TODO work on authentication using jwt also check livi's school information system repo on github

import { app } from '../../config';

const _passport = require('passport'),
    _passportJWT = require('passport-jwt'),
    ExtractJWT = _passportJWT.ExtractJwt,
    JWTStrategy = _passportJWT.Strategy;

export class PassportJWTService {

    constructor() {
        _passport.initialize();
    }

    authenticate() {
        return _passport.authenticate('jwt', {
            successRedirect: '/',
            failureRedirect: '/login',
            session: false
        });
    }

    jwtStrategyConfirmUser(payload, done) {
        let user = payload || null;
        if (user) {
            return done(null, {
                id: payload.id,
                email: payload.email,
                name: payload.name,
            });
        } else {
            return done(new Error("User not found"), null);
        }
    }

    getPassport() {
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
}