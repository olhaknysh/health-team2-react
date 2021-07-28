const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;


export default {
    getIsAuthenticated,
    getUserName,
    isLoading,
};