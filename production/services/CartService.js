'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cart = require('../models/Cart');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartService = exports.CartService = function () {
    function CartService() {
        var cart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CartService);

        this._cart = new _Cart.Cart(cart);
    }

    _createClass(CartService, [{
        key: 'addItem',
        value: function addItem(item, id) {
            var cartItem = this._cart.items[id];
            if (!cartItem) {
                cartItem = this._cart.items[id] = { item: item, quantity: 0, price: 0 };
            }
            cartItem.quantity++;
            cartItem.price = new Number(cartItem.item.price) * new Number(cartItem.quantity);
            this._cart.incrementTotalItems();
            this._cart.setTotalPrice(cartItem.item.price);
            return this._cart;
        }
    }, {
        key: 'removeItem',
        value: function removeItem(id) {
            if (this._cart.items[id]) {
                this._cart.totalItems -= new Number(this._cart.items[id].quantity);
                this._cart.totalPrice -= new Number(this._cart.items[id].price);
                delete this._cart.items[id];
            }
            return this._cart;
        }
    }, {
        key: 'getItems',
        value: function getItems() {
            return this._cart;
        }
    }]);

    return CartService;
}();