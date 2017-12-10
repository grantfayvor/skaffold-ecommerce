'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 06/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ProductRepository = require('../repositories/ProductRepository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _fileSystem = require('fs'),
    _repository = Symbol('repository');

var ProductService = exports.ProductService = function () {
    function ProductService() {
        _classCallCheck(this, ProductService);

        this[_repository] = new _ProductRepository.ProductRepository();
    }

    _createClass(ProductService, [{
        key: 'saveProduct',
        value: function saveProduct(product, callback) {
            var imageLocation = '/images/products/' + product.getName() + '.jpg';
            var result = _fileSystem.writeFileSync(imageLocation, product.getImage());
            if (!result) {
                console.log('adding product failed. Could not add product image');
                return;
            }
            product.setImage(imageLocation);
            this[_repository].save(product, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findProducts',
        value: function findProducts(callback) {
            this[_repository].findAll(function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findProductById',
        value: function findProductById(id, callback) {
            this[_repository].findById(id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'findProductByParam',
        value: function findProductByParam(paramName, paramValue, callback) {
            this[_repository].findByParam(paramName, paramValue, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'updateProduct',
        value: function updateProduct(product, id, callback) {
            return this[_repository].update(product, id, function (result) {
                callback(result);
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(id, callback) {
            return this[_repository].delete(id, function (result) {
                callback(result);
            });
        }
    }]);

    return ProductService;
}();