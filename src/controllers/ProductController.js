/**
 * Created by Harrison on 05/12/2017.
 */

import { ProductService } from '../services/ProductService';
import { Product } from '../models/Product';

const _productService = Symbol('productService');

class ProductController {

    constructor() {
        this[_productService] = new ProductService();
    }

    saveProduct(request, response) {
        if(!request.body.name || !request.body.brand || !request.body.price || !request.file.image){
            response.send('please fill all required fields');
        }
        let product = new Product(request.body.name, request.body.brand, request.body.price);
        product.setImage(request.file.image);
        this[_productService].saveProduct(product, result => {
            response.send({'message' : result});
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
        if(!request.body.name || !request.body.brand || !request.body.price){
            response.send('please fill all required fields');
        }
        let product = new Product(request.body.name, request.body.brand, request.body.price);
        this[_productService].updateProduct(product, request.query.id, result => {
            response.send({'message' : result});
        });
    }

    deleteProduct(request, response) {
        this[_productService].deleteProduct(request.query.id, result => {
            response.send({'message' : result});
        });
    }
}

export { ProductController }