import Product from '../Product';
import Api from '../Api'; 
jest.mock('../Api', () => {
    return {
        get: jest.fn(), 
    };
});
describe('Product Functions', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('should call Api.get for all()', () => {
        Product.all();
        expect(Api.get).toHaveBeenCalledWith('products');
    });

    it('should call Api.get with the correct endpoint for show()', () => {
        const productId = 123;
        Product.show(productId);
        expect(Api.get).toHaveBeenCalledWith(`products/${productId}`);
    });
});
