/**
 * Created by Harrison on 07/12/2017.
 */

import { UserService } from '../services/UserService';
import { User } from '../models/User';

const _userService = Symbol('userService');

class UserController {

    constructor() {
        this[_userService] = new UserService();
    }

    authenticateUser(request, response) {
        this[_userService].authenticateUser(request.body.email, request.body.password, result => {
            if (result) response.send('user was successfully authenticated');
            else response.send('user could not be authenticated. Confirm Login details');
        });
    }

    registerUser(request, response) {
        if (!request.body.name || !request.body.email || !request.body.password) {
            response.send('please fill all required fields');
        }
        let user = new User(request.body.name, request.body.email, request.body.password);
        this[_userService].saveUser(user, result => {
            if(result) this.authenticateUser(request, response);
            else response.send({'message' : result});;
        });
    }

    findUsers(request, response) {
        this[_userService].findUsers(users => {
            response.send(users);
        });
    }

    findUserById(request, response) {
        this[_userService].findUserById(request.query.id, user => {
            response.send(user);
        });
    }

    updateUser(request, response) {
        if (!request.body.name || !request.body.email || !request.body.password) {
            response.send('please fill all required fields');
        }
        let user = new User(request.body.name, request.body.email, request.body.password);
        this[_userService].updateUser(user, request.query.id, result => {
            response.send({'message' : result});
        });
    }

    deleteUser(request, response) {
        this[_userService].deleteUser(request.query.id, result => {
            response.send({'message' : result});
        });
    }
}

export { UserController }