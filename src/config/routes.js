/**
 * Created by Harrison on 05/12/2017.
 */

import { app } from '../../server';
import { ProductController } from '../controllers/ProductController';

let _productController = new ProductController();

app.get('/', (request, response) => response.send("Hello express"));

app.post('/api/product/save', (request, response) => _productController.saveProduct(request, response));

app.get('/api/products', (request, response) => _productController.findProducts(request, response));

app.get('/api/product/find', (request, response) => _productController.findProductById(request, response));

app.put('/api/product/update', (request, response) => _productController.updateProduct(request, response));

app.delete('/api/product/delete', (request, response) => _productController.deleteProduct(request, response));