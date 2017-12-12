import { Cart } from '../models/Cart';

export class CartService {

    constructor(cart = {}) {
        this._cart = new Cart(cart);
    }

    addItem(item, id) {
        let cartItem = this._cart.items[id];
        if (!cartItem) {
            cartItem = this._cart.items[id] = { item: item, quantity: 0, price: 0 };
        }
        cartItem.quantity++;
        cartItem.price = new Number(cartItem.item.price) * new Number(cartItem.quantity);
        this._cart.incrementTotalItems();
        this._cart.setTotalPrice(cartItem.item.price);
        return this._cart;
    }

    removeItem(id) {
        if (this._cart.items[id]) {
            this._cart.totalItems -= new Number(this._cart.items[id].quantity);
            this._cart.totalPrice -= new Number(this._cart.items[id].price);
            delete this._cart.items[id];
        }
        return this._cart;
    }

    getItems() {
        return this._cart;
    }
}