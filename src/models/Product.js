/**
 * Created by Harrison on 05/12/2017.
 */

const _name = Symbol('name'),
    _brand = Symbol('brand'),
    _price = Symbol('price'),
    _image = Symbol('image');

class Product {

    constructor(name, brand, price) {
        this[_name] = name;
        this[_brand] = brand;
        this[_price] = price;
    }

    getName() {
        return this[_name];
    }

    getPrice() {
        return this[_price];
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
            'image'
        ];
    }

    toJson() {
        return {
            'name': this[_name],
            'brand': this[_brand],
            'price': this[_price],
            'image': this[_image]
        };
    }
}

export { Product }
