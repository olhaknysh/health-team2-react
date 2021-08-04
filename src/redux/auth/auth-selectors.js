const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;

const notAllowedProducts = state => state.auth.user.notAllowedProducts;

const dailyCalories = state => state.auth.user.dailyCalories;

const getUserId = state => state.auth.user.id;

const getUserData = state => state.auth.user.userInfo;

const token = state => state.auth.token;

const authError = state => state.auth.error;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getIsAuthenticated,
    getUserName,
    isLoading,
    notAllowedProducts,
    dailyCalories,
    getUserId,
    getUserData,
    token,
    authError
};
