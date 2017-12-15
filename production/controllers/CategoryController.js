'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 10/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CategoryService = require('../services/CategoryService');

var _Category = require('../models/Category');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _categoryService = Symbol('categoryService');
// const category = JSON.parse(fs.readFileSync('models/category.json', 'utf8'));

var CategoryController = exports.CategoryController = function () {
    function CategoryController() {
        _classCallCheck(this, CategoryController);

        this[_categoryService] = new _CategoryService.CategoryService();
    }

    _createClass(CategoryController, [{
        key: 'saveCategory',
        value: function saveCategory(request, response) {
            if (!request.body.name) {
                response.send('please fill all required fields');
            }
            // let category = new Category(request.body.name);
            var category = request.body;
            this[_categoryService].saveCategory(category, function (result) {
                response.send({ 'message': result });
            });
        }
    }, {
        key: 'findCategories',
        value: function findCategories(request, response) {
            this[_categoryService].findCategorys(function (categories) {
                response.send(categories);
            });
        }
    }, {
        key: 'findCategoryById',
        value: function findCategoryById(request, response) {
            this[_categoryService].findCategoryById(request.query.id, function (category) {
                response.send(category);
            });
        }
    }, {
        key: 'updateCategory',
        value: function updateCategory(request, response) {
            if (!request.body.name) {
                response.send('please fill all required fields');
            }
            // let category = new Category(request.body.name);
            var category = request.body;
            this[_categoryService].updateCategory(category, request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }, {
        key: 'deleteCategory',
        value: function deleteCategory(request, response) {
            this[_categoryService].deleteCategory(request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }]);

    return CategoryController;
}();