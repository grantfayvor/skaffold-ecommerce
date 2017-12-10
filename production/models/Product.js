'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Harrison on 05/12/2017.
 */

var _name = Symbol('name'),
    _brand = Symbol('brand'),
    _price = Symbol('price'),
    _image = Symbol('image');

var Product = function () {
    function Product(name, brand, price) {
        _classCallCheck(this, Product);

        this[_name] = name;
        this[_brand] = brand;
        this[_price] = price;
    }

    _createClass(Product, [{
        key: 'getName',
        value: function getName() {
            return this[_name];
        }
    }, {
        key: 'getPrice',
        value: function getPrice() {
            return this[_price];
        }
    }, {
        key: 'setImage',
        value: function setImage(image) {
            this[_image] = image;
        }
    }, {
        key: 'getImage',
        value: function getImage() {
            return this[_image];
        }
    }, {
        key: 'getFields',
        value: function getFields() {
            return ['name', 'brand', 'price', 'image'];
        }
    }, {
        key: 'toJson',
        value: function toJson() {
            return {
                'name': this[_name],
                'brand': this[_brand],
                'price': this[_price],
                'image': this[_image]
            };
        }
    }]);

    return Product;
}();

exports.Product = Product;