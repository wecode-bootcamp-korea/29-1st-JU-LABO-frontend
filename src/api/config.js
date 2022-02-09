const BASE_URL = 'http://10.58.0.160:8000';

export const api = {
  fetchLogin: BASE_URL + '/users/login',
  fetchSignup: BASE_URL + '/users/signup',
  fetchProductList: BASE_URL + '/products/productlist',
  fetchSearchList: BASE_URL + '/products/productsearch',
  fetchDetailProduct: BASE_URL + '/products',
  fetchAddCart: BASE_URL + '/carts',
  fetchCartItems: BASE_URL + '/carts',
  fetchCartModifyQuantity: BASE_URL + '/carts',
  fetchCartDeleteItem: BASE_URL + '/carts',
  fetchOrderRecommendList: BASE_URL + '/carts/recommendation',
};
