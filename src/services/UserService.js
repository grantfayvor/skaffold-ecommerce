/**
 * Created by Harrison on 07/12/2017.
 */

import { UserRepository } from '../repositories/UserRepository';

const _bcrypt = require('bcrypt'),
    _repository = Symbol('repository');


export class UserService {

    constructor() {
        this[_repository] = new UserRepository();
    }

    confirmUserDetails(username, password, callback) {
        this.findOneUserByParam('email', username, user => {
            if (!user[0]) return callback(new Error("invalid login details"), false);
            if (!_bcrypt.compareSync(password, user[0].password)) {
                return callback(new Error("invalid login details"), false);
            }
            return callback(null, user[0]);
        });
    }

    saveUser(user, callback) {
        user.setPassword(_bcrypt.hashSync(user.getPassword(), 10));
        this[_repository].save(user, result => {
            callback(result);
        });
    }

    findUsers(callback) {
        this[_repository].findAll(result => {
            callback(result);
        });
    }

    findUserById(id, callback) {
        this[_repository].findById(id, result => {
            callback(result);
        });
    }

    findOneUserByParam(paramName, paramValue, callback) {
        this[_repository].findOneByParam(paramName, paramValue, result => {
            callback(result);
        });
    }

    findUserByParam(paramName, paramValue, callback) {
        this[_repository].findByParam(paramName, paramValue, result => {
            callback(result);
        });
    }

    updateUser(user, id, callback) {
        this[_repository].update(user, id, result => {
            callback(result);
        });
    }

    deleteUser(id, callback) {
        this[_repository].delete(id, result => {
            callback(result);
        });
    }

}