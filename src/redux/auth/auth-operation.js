/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';
import { toast } from 'react-toastify';
// axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const register = credentials => async (dispatch, getState) => {
  dispatch(authActions.registerRequest());
  const {
    auth: { user },
  } = getState();
  const { dailyCalories, notAllowedProducts } = user;

  try {
    const response = await axios.post('/users/signup', {
      ...credentials,
      dailyCalories,
      notAllowedProducts,
    });

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    toast.error('Такой пользователь уже зарегистрирован');
    dispatch(authActions.registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    toast.error('Непрвильный логин или пароль');
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    toast.error(error.message);
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.logoutRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    toast.error('Ошибка доступа! Выполните вход в личный кабинет');
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default {
  register,
  login,
  logOut,
  getCurrentUser,
};
