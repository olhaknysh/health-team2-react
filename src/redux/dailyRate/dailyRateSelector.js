const getCalories = state => state.auth.user.dailyCalories;
const getProducts = state => state.auth.user.notAllowedProducts;

// eslint-disable-next-line
export default { getCalories, getProducts };

