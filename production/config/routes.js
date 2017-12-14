'use strict';

var _server = require('../../server');

var _ProductController = require('../controllers/ProductController');

var _UserController = require('../controllers/UserController');

var _https = require('https');

var _CartController = require('../controllers/CartController');

var _productController = new _ProductController.ProductController(); /**
                                                                      * Created by Harrison on 05/12/2017.
                                                                      * describes routes for the application
                                                                      */

var _userController = new _UserController.UserController();
var _cartController = new _CartController.CartController();

_server.app.get('/', function (request, response) {
  return response.send(["Hello express", { csrfToken: request.csrfToken() }]);
});

//product apis
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

//cart apis
_server.app.get('/api/cart', function (request, response) {
  return _cartController.getCart(request, response);
});

_server.app.post('/api/cart/add', function (request, response) {
  return _cartController.addItemToCart(request, response);
});

_server.app.delete('/api/cart/remove', function (request, response) {
  return _cartController.removeItemFromCart(request, response);
});

//user apis
_server.app.post('/api/user/save', function (request, response) {
  return _userController.registerUser(request, response);
});

_server.app.post('/api/user/authenticate', _server._passportLocalService._passport.authenticate('local', _server._passportLocalService._behaviour), function (req, res) {
  res.send(req.user.profile);
});

_server.app.get('/api/users', function (request, response) {
  return _userController.findUsers(request, response);
});

_server.app.get('/api/user/find', function (request, response) {
  return _userController.findUserById(request, response);
});

_server.app.put('/api/user/update', function (response, request) {
  return _userController.updateUser(request, response);
});

_server.app.delete('/api/user/delete', function (request, response) {
  return _userController.deleteUser(request, response);
});