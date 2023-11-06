
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
const vueLocal = createLocalVue();
vueLocal.use(Vuex);
export const cartStore=
{
  "id": 1,
  "userId": 1,
  "date": "2020-03-02T00:00:00.000Z",
  "products": [
  {
  "productId": 1,
  "quantity": 4
  },
  {
  "productId": 2,
  "quantity": 1
  },
  {
  "productId": 3,
  "quantity": 6
  }
  ],
  "__v": 0
  }
export const productStore=
[{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
  "rate": 3.9,
  "count": 120
  }
  },
  {
  "id": 2,
  "title": "Mens Casual Premium Slim Fit T-Shirts ",
  "price": 22.3,
  "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "rating": {
  "rate": 4.1,
  "count": 259
  }
  }]

describe('default store', () => { 
    it('should return default store values',()=>{
        const store = new Vuex.Store({
            modules:{
              product:productStore,
              cart:cartStore
            }
        })
        // console.log("Test", store.state.cart);
      expect(store.state.cart).toBeDefined();

    })
    it('should return default store values',()=>{
      const store = new Vuex.Store({
          modules:{
            product:productStore,
            cart:cartStore
          }
      })
      // console.log("Test", store.state.product);
    expect(store.state.product).toBeDefined();

  })
 })

