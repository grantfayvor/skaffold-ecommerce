/**
 * Created by Harrison on 05/12/2017.
 * describes routes for the application
 */

import { app, _passportLocalService } from '../../server';
import { ProductController } from '../controllers/ProductController';
import { UserController } from '../controllers/UserController';
import { request } from 'https';
import { CartController } from '../controllers/CartController';

const _productController = new ProductController();
const _userController = new UserController();
const _cartController = new CartController();

//product apis
app.post('/api/product/save', (request, response) => _productController.saveProduct(request, response));

app.get('/api/products', (request, response) => _productController.findProducts(request, response));

app.get('/api/product/find', (request, response) => _productController.findProductById(request, response));

app.put('/api/product/update', (request, response) => _productController.updateProduct(request, response));

app.delete('/api/product/delete', (request, response) => _productController.deleteProduct(request, response));


//cart apis
app.get('/api/cart', (request, response) => _cartController.getCart(request, response));

app.post('/api/cart/add', (request, response) => _cartController.addItemToCart(request, response));

app.delete('/api/cart/remove', (request, response) => _cartController.removeItemFromCart(request, response));


//user apis
app.post('/api/user/save', (request, response) => _userController.registerUser(request, response));

app.post('/api/user/authenticate', _passportLocalService._passport.authenticate('local', _passportLocalService._behaviour), function (req, res) {
    res.send(req.user.profile);
});

app.get('/api/users', (request, response) => _userController.findUsers(request, response));

app.get('/api/user/find', (request, response) => _userController.findUserById(request, response));

app.put('/api/user/update', (response, request) => _userController.updateUser(request, response));

app.delete('/api/user/delete', (request, response) => _userController.deleteUser(request, response));