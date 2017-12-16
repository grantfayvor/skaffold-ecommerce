/**
 * Created by Harrison on 07/12/2017.
 */

const _name = Symbol('name');

export class Category {

    constructor(name) {
        this[_name] = name;
    }

    getName() {
        return this[_name];
    }

    getFields() {
        return [
            'name'
        ];
    }

    toJson() {
        return {
            'name': this[_name]
        };
    }
}
