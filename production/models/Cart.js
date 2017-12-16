"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = exports.Cart = function () {
    function Cart(cart) {
        _classCallCheck(this, Cart);

        this.items = cart.items || {};
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    _createClass(Cart, [{
        key: "getItems",
        value: function getItems() {
            var items = [];
            for (var id in this.items) {
                items.push(this.items[id]);
            }
            return items;
        }
    }, {
        key: "incrementTotalItems",
        value: function incrementTotalItems() {
            return this.totalItems++;
        }
    }, {
        key: "setTotalPrice",
        value: function setTotalPrice(price) {
            this.totalPrice += new Number(price);
        }
    }, {
        key: "getItem",
        value: function getItem(id) {
            return this.items[id];
        }
    }, {
        key: "getTotalItems",
        value: function getTotalItems() {
            return this.totalItems;
        }
    }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
            return this.totalPrice;
        }
    }]);

    return Cart;
}();