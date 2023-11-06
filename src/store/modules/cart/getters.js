/* eslint-disable */
export const cartItemCount = (state) => {
    console.log(state.cart.length)
    return state.cart.length;
}
export const totalItemsQuantity = (state) => {
    //console.log("totalItemsCount",state.cart.reduce((total, item) => total + item.quantity, 0));
    return state.cart.reduce((total, item) => total + item.quantity, 0);
   
}

// export const cartTotalPrice = (state) => {
//     console.log("dfgjdghfjd", state);
//     if (state.cart.length === 0) {
//       return undefined;
//     }
  
//     let total = 0;
//     state.cart.forEach(item => {
//       total += item.product.price * item.quantity;
//     });
//     return total;
//   }
  
export const cartTotalPrice = (state) => {
    console.log('cartTotalPrice function called with state:', state);
  
    if (state.cart.length === 0) {
      console.log('Returning undefined because the cart is empty.');
      return undefined;
    }
  
    let total = 0;
    state.cart.forEach(item => {
      total += item.product.price * item.quantity;
    });
    console.log('Returning total:', total);
    return total;
  };
  
  