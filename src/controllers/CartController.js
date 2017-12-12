import { CartService } from "../services/CartService";


export class CartController {

    constructor() {
    }

    addItemToCart(request, response) {
        let cartService = new CartService(request.session.cart ? request.session.cart : {});
        request.session.cart = cartService.addItem(request.body.item, request.query.id);
        return response.send(request.session.cart);
    }

    removeItemFromCart(request, response) {
        let cartService = new CartService(request.session.cart ? request.session.cart : {});
        request.session.cart = cartService.removeItem(request.query.id);
        return response.send(request.session.cart);
    }

    getCart(request, response) {
        let cartService = new CartService(request.session.cart ? request.session.cart : {});
        return response.send(cartService.getItems());
    }
}