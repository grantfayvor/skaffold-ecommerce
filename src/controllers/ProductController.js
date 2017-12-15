/**
 * Created by Harrison on 05/12/2017.
 */

import { ProductService } from '../services/ProductService';
import { Product } from '../models/Product';

const _productService = Symbol('productService');
// const product = JSON.parse(fs.readFileSync('models/product.json', 'utf8'));

export class ProductController {

    constructor() {
        this[_productService] = new ProductService();
    }

    saveProduct(request, response) {
        if (!request.body.name || !request.body.brand || !request.body.price
            || !request.body.category_id || !request.file.image) {
            response.send('please fill all required fields');
        }
        let product = request.body;
        product.image = request.file.image;
        this[_productService].saveProduct(product, result => {
            response.send({ 'message': result });
        });
    }

    findProducts(request, response) {
        this[_productService].findProducts(products => {
            response.send(products);
        });
    }

    findProductById(request, response) {
        this[_productService].findProductById(request.query.id, product => {
            response.send(product);
        });
    }

    updateProduct(request, response) {
        if (!request.body.name || !request.body.brand || !request.body.price || !request.body.categoryId) {
            response.send('please fill all required fields');
        }
        let product = request.body;
        this[_productService].updateProduct(product, request.query.id, result => {
            response.send({ 'message': result });
        });
    }

    deleteProduct(request, response) {
        this[_productService].deleteProduct(request.query.id, result => {
            response.send({ 'message': result });
        });
    }
}