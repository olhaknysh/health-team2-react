const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;

const notAllowedProducts = state => state.auth.user.notAllowedProducts;

const dailyCalories = state => state.auth.user.dailyCalories;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserName,
  isLoading,
  notAllowedProducts,
  dailyCalories
};
