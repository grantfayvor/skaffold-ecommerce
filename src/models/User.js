/**
 * Created by Harrison on 07/12/2017.
 */

const _name = Symbol('name'),
    _email = Symbol('email'),
    _password = Symbol('password');

export class User {

    constructor(name, email, password) {
        this[_name] = name;
        this[_email] = email;
        this[_password] = password;
    }

    getName() {
        return this[_name];
    }

    getEmail() {
        return this[_email];
    }

    setPassword(password) {
        this[_password] = password;
    }

    getPassword() {
        return this[_password];
    }

    getFields() {
        return [
            'name',
            'email',
            'password'
        ];
    }

    toJson() {
        return {
            'name': this[_name],
            'email': this[_email],
            'password': this[_password]
        };
    }
}