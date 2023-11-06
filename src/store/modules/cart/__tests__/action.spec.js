import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import * as actions from "../actions";
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Actions addProductToCart', () => {
    const commit = jest.fn();
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
     actions.addProductToCart({commit}, state.cart[0]);
   
    it('addProductToCart it condition if its called', () => {
         expect(state.cart[0].product.id).toBe(2); 
         expect(state.cart[0].quantity).toBe(1);  
    });
});
describe('Actions clear cart items', () => {
    const commit = jest.fn();
    const state =     {
        cart: [
            
        ]
    }
     actions.clearCartItems({commit});
   
    it(' clear cart items ', () => {
         expect(state.cart.length).toBe(0); 
         
    });
});
describe('Actions remove cart items', () => {
    const commit = jest.fn();
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
     actions.removeProductFromCart({commit},state.cart[0].product);
    it('  removeProductFromCart', () => {
         expect(state.cart[0].product.id).toBe(2);
         
    });
});
