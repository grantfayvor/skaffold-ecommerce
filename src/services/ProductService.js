/**
 * Created by Harrison on 06/12/2017.
 */

import { ProductRepository } from '../repositories/ProductRepository';

const _fileSystem = require('fs'),
    _repository = Symbol('repository');

export class ProductService {

    constructor() {
        this[_repository] = new ProductRepository();
    }

    saveProduct(product, callback) {
        let imageLocation = '/images/products/' + product.getName() +'.jpg';
        let result = _fileSystem.writeFileSync(imageLocation, product.getImage());
        if (!result) {
            console.log('adding product failed. Could not add product image');
            return;
        }
        product.setImage(imageLocation);
        this[_repository].save(product, result => {
            callback(result);
        });
    }

    findProducts(callback) {
        this[_repository].findAll(result => {
            callback(result);
        });
    }

    findProductById(id, callback) {
        this[_repository].findById(id, result => {
            callback(result);
        });
    }

    findProductByParam(paramName, paramValue, callback) {
        this[_repository].findByParam(paramName, paramValue, result => {
            callback(result);
        });
    }

    updateProduct(product, id, callback) {
        return this[_repository].update(product, id, result => {
            callback(result);
        });
    }

    deleteProduct(id, callback) {
        return this[_repository].delete(id, result => {
            callback(result);
        });
    }
}