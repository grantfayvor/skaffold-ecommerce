export class Cart {

    constructor(cart) {
        this.items = cart.items || {};
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    getItems() {
        let items = [];
        for(let id in this.items) {
            items.push(this.items[id]);
        }
        return items;
    }

    incrementTotalItems() {
        return this.totalItems++;
    }

    setTotalPrice(price) {
        this.totalPrice += new Number(price);
    }

    getItem(id) {
        return this.items[id];
    }

    getTotalItems() {
        return this.totalItems;
    }

    getTotalPrice() {
        return this.totalPrice;
    }
}