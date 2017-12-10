/**
 * Created by Harrison on 07/12/2017.
 */

const _name = Symbol('name'),
    _email = Symbol('email'),
    _password = Symbol('password');

class User {

    constructor(name, email, password) {
        this[_name] = name;
        this[_email] - email;
        this[_password] = password;
    }

    getName() {
        return this[_name];
    }

    getEmail() {
        return this[_email];
    }

    getPrice() {
        return this[_price];
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

export { User }