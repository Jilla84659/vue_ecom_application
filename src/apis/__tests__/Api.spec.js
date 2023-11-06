import Api from '../Api'; 
describe('Api', () => {
  it('should have the correct baseURL', () => {
    expect(Api.defaults.baseURL).toBe('https://fakestoreapi.com');
  });
});
