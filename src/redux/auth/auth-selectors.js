const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;

const token = state => state.auth.token;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserName,
  isLoading,
  token,
};
