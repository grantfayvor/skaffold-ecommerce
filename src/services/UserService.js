/**
 * Created by Harrison on 07/12/2017.
 */

import { UserRepository } from '../repositories/UserRepository';

const _repository = Symbol('repository');

class UserService {

    constructor() {
        this[_repository] = new UserRepository();
    }

    authenticateUser(username, password, callback) {

    }

    saveUser(user, callback) {
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