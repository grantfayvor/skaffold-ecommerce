/**
 * Created by Harrison on 10/12/2017.
 */

import { CategoryService } from '../services/CategoryService';
import { Category } from '../models/Category';

const _categoryService = Symbol('categoryService');
// const category = JSON.parse(fs.readFileSync('models/category.json', 'utf8'));

export class CategoryController {

    constructor() {
        this[_categoryService] = new CategoryService();
    }

    saveCategory(request, response) {
        if (!request.body.name) {
            response.send('please fill all required fields');
        }
        // let category = new Category(request.body.name);
        let category = request.body;
        this[_categoryService].saveCategory(category, result => {
            response.send({ 'message': result });
        });
    }

    findCategories(request, response) {
        this[_categoryService].findCategorys(categories => {
            response.send(categories);
        });
    }

    findCategoryById(request, response) {
        this[_categoryService].findCategoryById(request.query.id, category => {
            response.send(category);
        });
    }

    updateCategory(request, response) {
        if (!request.body.name) {
            response.send('please fill all required fields');
        }
        // let category = new Category(request.body.name);
        let category = request.body;
        this[_categoryService].updateCategory(category, request.query.id, result => {
            response.send({ 'message': result });
        });
    }

    deleteCategory(request, response) {
        this[_categoryService].deleteCategory(request.query.id, result => {
            response.send({ 'message': result });
        });
    }
}