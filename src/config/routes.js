/**
 * Created by Harrison on 05/12/2017.
 * describes routes for the application
 */

import { csrfProtection, parseForm, app } from '../../server';
import { ProductController } from '../controllers/ProductController';

let _productController = new ProductController();

app.get('/', (request, response) => response.send(["Hello express", { csrfToken: req.csrfToken() }]));

app.post('/api/product/save', csrfProtection, (request, response) => _productController.saveProduct(request, response));

app.get('/api/products', csrfProtection, (request, response) => _productController.findProducts(request, response));

app.get('/api/product/find', csrfProtection, (request, response) => _productController.findProductById(request, response));

app.put('/api/product/update', csrfProtection, (request, response) => _productController.updateProduct(request, response));

app.delete('/api/product/delete', csrfProtection, (request, response) => _productController.deleteProduct(request, response));