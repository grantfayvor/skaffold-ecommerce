'use strict';

var _server = require('../../server');

var _ProductController = require('../controllers/ProductController');

/**
 * Created by Harrison on 05/12/2017.
 * describes routes for the application
 */

var _productController = new _ProductController.ProductController();

_server.app.get('/', function (request, response) {
  return response.send("Hello express");
});

_server.app.post('/api/product/save', function (request, response) {
  return _productController.saveProduct(request, response);
});

_server.app.get('/api/products', function (request, response) {
  return _productController.findProducts(request, response);
});

_server.app.get('/api/product/find', function (request, response) {
  return _productController.findProductById(request, response);
});

_server.app.put('/api/product/update', function (request, response) {
  return _productController.updateProduct(request, response);
});

_server.app.delete('/api/product/delete', function (request, response) {
  return _productController.deleteProduct(request, response);
});