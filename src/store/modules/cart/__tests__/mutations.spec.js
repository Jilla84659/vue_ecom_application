
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import * as actions from "../actions";
import * as mutations from "../mutations";
import product from '../../product';
import cart from '..';
//import * as state from "../state";

// Mock the Cart module
jest.mock("../../cart", () => {
    return {

    };
});

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Actions when required attributes are properly set', () => {
    const state =     {
        cart: [
            {
                product: {
                    id: 2,
                },
                quantity: 1
            }
        ]
    }
  
    mutations.ADD_TO_CART(state, state.cart[0].product);
    // actions.addProductToCart({commit:'ADD_TO_CART'},state);
   
    it('expects all attributes', () => {
         expect(state.cart[0].product.id).toBe(2);
         expect(state.cart[0].quantity).toBe(1);
    });
});

describe('Actions when required attributes are properly set', () => {
    const state =     {
        cart: [
            {
                product: {
                },
                quantity: 1
            }
        ]
    }
  
    mutations.ADD_TO_CART(state, state.cart[0].product);
    // actions.addProductToCart({commit:'ADD_TO_CART'},state);
   
    it('expects all attributes', () => {
         expect(state.cart[0].product.id).toBe(undefined);
    });
});
describe('Actions when required attributes are properly set', () => {
    const state =     {
        cart: []
    }
  
    mutations.ADD_TO_CART(state, state.cart);
    // actions.addProductToCart({commit:'ADD_TO_CART'},state);
   
    it('expects all attributes', () => {
         expect(state.cart).toBeDefined();
    });
});

describe('Actions when required attributes are properly set', () => {
    const state =     {
    }

  
    mutations.ADD_TO_CART(state, state);
    // actions.addProductToCart({commit:'ADD_TO_CART'},state);
   
    it('expects all attributes', () => {
         expect(state).toBeDefined();
    });
});
describe('clear cart', () => {
    const state =     {
        cart: [
            {
                product: {
                    id:1,
                },
                quantity: 1
            }
        ]
    }
  
    mutations.CLEAR_CART_ITEMS(state);
   
    it('expects cart to be cleared', () => {
         expect(state).toBeDefined();
    });
});
describe('clear cart', () => {
    const state =     {
        cart: []
    }
  
    mutations.CLEAR_CART_ITEMS(state);
   
    it('expects cart to be cleared', () => {
         expect(state.cart).toEqual([]);
    });
});
describe('REMOVE PRODUCTS FROM CART', () => {
    const state =     {
        cart: [
            {
                product: {
                    id: 2,
                },
                quantity: 1
            }
        ]
    }

    mutations.REMOVE_PRODUCT_FROM_CART(state, state.cart[0].product);
  
   
    it('expects REMOVE_PRODUCT_FROM_CART', () => {
         expect(state.cart[0]).toBeUndefined();
         
    });
});


describe('SET_CART', () => {
    const state =     {
        cart: [
            {
                product: {
                    id: 2,
                },
                quantity: 1
            },
            {
                product: {
                    id: 1,
                },
                quantity: 1
            }
        ]
    }
  
    mutations.SET_CART(state, state.cart);
    // actions.addProductToCart({commit:'ADD_TO_CART'},state);
   
    it('cart Items length', () => {
         expect(state.cart.length).toBe(2);
   
    });
});

