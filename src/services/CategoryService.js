/**
 * Created by Harrison on 10/12/2017.
 */

import { CategoryRepository } from '../repositories/CategoryRepository';

const _repository = Symbol('repository');

export class CategoryService {

    constructor() {
        this[_repository] = new CategoryRepository();
    }

    saveCategory(category, callback) {
        this[_repository].save(category, result => {
            callback(result);
        });
    }

    findCategories(callback) {
        this[_repository].findAll(result => {
            callback(result);
        });
    }

    findCategoryById(id, callback) {
        this[_repository].findById(id, result => {
            callback(result);
        });
    }

    findCategoryByParam(paramName, paramValue, callback) {
        this[_repository].findByParam(paramName, paramValue, result => {
            callback(result);
        });
    }

    updateCategory(category, id, callback) {
        this[_repository].update(category, id, result => {
            callback(result);
        });
    }

    deleteCategory(id, callback) {
        this[_repository].delete(id, result => {
            callback(result);
        });
    }
}