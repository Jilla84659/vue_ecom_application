import Cart from "../../../apis/Cart";

export const addProductToCart = ({ commit }, { product, quantity }) => {
    console.log("addproductstocart product",product);
   console.log("addproductstocart quantity",quantity);

    commit('ADD_TO_CART', { product, quantity });


    Cart.store({
        product_id: product.id,
        quantity
    });
}



export const getCartItems = ({ commit }) => {
    Cart.all().then(response => {
        // console.log("Ammulya", response);
        const cartResponse = [] || response.data;
        commit('SET_CART', cartResponse);
    })
}

export const removeProductFromCart = ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
    Cart.delete(product.id);
}

export const clearCartItems = ({ commit }) => {
    commit('CLEAR_CART_ITEMS');
}



