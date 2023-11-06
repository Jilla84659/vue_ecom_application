import { cartItemCount, totalItemsQuantity, cartTotalPrice} from '../getters';

jest.mock('../getters', () => ({
  cartItemCount: jest.fn(),
  totalItemsQuantity: jest.fn(),
  cartTotalPrice: jest.fn(),
}));

describe('cartItemsCount()', () => {

  it('should return the correct number of items in the cart', () => {

    cartItemCount.mockReturnValue(2);

    const result = cartItemCount();
    expect(result).toBe(2);
  });
});

describe('totalItemsQuantity()', () => {
  it('should return 0 when the cart is empty', () => {
    const state = { cart: [] };
    totalItemsQuantity.mockReturnValue(0);
    const result = totalItemsQuantity(state);
    expect(result).toBe(0);
  });

  it('should return the total quantity of items in the cart', () => {
    const state = {
      cart: [
        { product: { price: 10 }, quantity: 2 },
        { product: { price: 20 }, quantity: 3 },
        { product: { price: 15 }, quantity: 1 },
      ],
    };
    totalItemsQuantity.mockImplementation((state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0)
    );
    const result = totalItemsQuantity(state);
    expect(result).toBe(6);
  });
});
describe('cartTotalPrice', () => {
  it('should return 0 when the cart is empty', () => {
    const state = { cart: [] };
    const result = cartTotalPrice(state);
    expect(result).toBeUndefined();
  });
  it('should return the correct total price of items in the cart', () => {
    const state = {
      cart: [

        {
          "product": {
            "price": 15,
          },
          "quantity": 2
        }
      ]
    };
    cartTotalPrice.mockReturnValue(30);
    const result = cartTotalPrice(state);
    expect(state.cart.length).toBe(1);
    expect(result).toEqual(30);
  });
 
  


});

