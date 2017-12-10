'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 10/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CategoryRepository = require('../repositories/CategoryRepository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _repository = Symbol('repository');

var CategoryService = exports.CategoryService = function () {
    function CategoryService() {
        _classCallCheck(this, CategoryService);

        this[_repository] = new _CategoryRepository.CategoryRepository();
    }

    _createClass(CategoryService, [{
        key: 'saveCategory',
        value: function saveCategory(category, callback) {
            this[_repository].save(category, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findCategories',
        value: function findCategories(callback) {
            this[_repository].findAll(function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findCategoryById',
        value: function findCategoryById(id, callback) {
            this[_repository].findById(id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findCategoryByParam',
        value: function findCategoryByParam(paramName, paramValue, callback) {
            this[_repository].findByParam(paramName, paramValue, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'updateCategory',
        value: function updateCategory(category, id, callback) {
            this[_repository].update(category, id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'deleteCategory',
        value: function deleteCategory(id, callback) {
            this[_repository].delete(id, function (result) {
                callback(result);
            });
        }
    }]);

    return CategoryService;
}();