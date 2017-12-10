/**
 * Created by Harrison on 05/12/2017.
 */

const _name = Symbol('name'),
    _brand = Symbol('brand'),
    _price = Symbol('price'),
    _categoryId = Symbol('categoryId'),
    _image = Symbol('image');

class Product {

    constructor(name, brand, price, categoryId) {
        this[_name] = name;
        this[_brand] = brand;
        this[_price] = price;
        this[_categoryId] = categoryId;
    }

    getName() {
        return this[_name];
    }

    getPrice() {
        return this[_price];
    }

    getCategoryId() {
        return this[_categoryId];
    }

    setImage(image) {
        this[_image] = image;
    }

    getImage() {
        return this[_image];
    }

    getFields() {
        return [
            'name',
            'brand',
            'price',
            'categoryId',
            'image'
        ];
    }

    toJson() {
        return {
            'name': this[_name],
            'brand': this[_brand],
            'price': this[_price],
            'categoryId': this[_categoryId],
            'image': this[_image]
        };
    }
}

export { Product }
