const BASE_URL = 'http://3.90.45.177:8000';

export const api = {
  fetchLogin: BASE_URL + '/users/login',
  fetchSignup: BASE_URL + '/users/signup',
  fetchPopular: BASE_URL + '/users/popular',
  fetchProductList: BASE_URL + '/products/productlist',
  fetchDetailProduct: BASE_URL + '/products',
  fetchAddCart: BASE_URL + '/carts',
  fetchCartItems: BASE_URL + '/carts',
  fetchCartModifyQuantity: BASE_URL + '/carts',
  fetchCartDeleteItem: BASE_URL + '/carts',
  fetchOrderRecommendList: BASE_URL + '/carts/recommendation',
};
