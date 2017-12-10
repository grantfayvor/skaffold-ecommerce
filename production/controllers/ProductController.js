'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Harrison on 05/12/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ProductService = require('../services/ProductService');

var _Product = require('../models/Product');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _productService = Symbol('productService');

var ProductController = exports.ProductController = function () {
    function ProductController() {
        _classCallCheck(this, ProductController);

        this[_productService] = new _ProductService.ProductService();
    }

    _createClass(ProductController, [{
        key: 'saveProduct',
        value: function saveProduct(request, response) {
            if (!request.body.name || !request.body.brand || !request.body.price || !request.body.categoryId || !request.file.image) {
                response.send('please fill all required fields');
            }
            var product = new _Product.Product(request.body.name, request.body.brand, request.body.price, request.body.categoryId);
            product.setImage(request.file.image);
            this[_productService].saveProduct(product, function (result) {
                response.send({ 'message': result });
            });
        }
    }, {
        key: 'findProducts',
        value: function findProducts(request, response) {
            this[_productService].findProducts(function (products) {
                response.send(products);
            });
        }
    }, {
        key: 'findProductById',
        value: function findProductById(request, response) {
            this[_productService].findProductById(request.query.id, function (product) {
                response.send(product);
            });
        }
    }, {
        key: 'updateProduct',
        value: function updateProduct(request, response) {
            if (!request.body.name || !request.body.brand || !request.body.price || !request.body.categoryId) {
                response.send('please fill all required fields');
            }
            var product = new _Product.Product(request.body.name, request.body.brand, request.body.price, request.body.categoryId);
            this[_productService].updateProduct(product, request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(request, response) {
            this[_productService].deleteProduct(request.query.id, function (result) {
                response.send({ 'message': result });
            });
        }
    }]);

    return ProductController;
}();