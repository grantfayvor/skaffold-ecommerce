"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CartService = require("../services/CartService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartController = exports.CartController = function () {
    function CartController() {
        _classCallCheck(this, CartController);
    }

    _createClass(CartController, [{
        key: "addItemToCart",
        value: function addItemToCart(request, response) {
            var cartService = new _CartService.CartService(request.session.cart ? request.session.cart : {});
            request.session.cart = cartService.addItem(request.body.item, request.query.id);
            return response.send(request.session.cart);
        }
    }, {
        key: "removeItemFromCart",
        value: function removeItemFromCart(request, response) {
            var cartService = new _CartService.CartService(request.session.cart ? request.session.cart : {});
            request.session.cart = cartService.removeItem(request.query.id);
            return response.send(request.session.cart);
        }
    }, {
        key: "getCart",
        value: function getCart(request, response) {
            var cartService = new _CartService.CartService(request.session.cart ? request.session.cart : {});
            return response.send(cartService.getItems());
        }
    }]);

    return CartController;
}();