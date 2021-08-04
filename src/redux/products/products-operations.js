import axios from 'axios';
import productsActions from './products-actions';
import { toast } from 'react-toastify';

const getProductsByDay = date => async dispatch => {
  dispatch(productsActions.getProductsByDayRequest());

  try {
    const { data } = await axios.get(`/products/${date}`);

    dispatch(productsActions.getProductsByDaySuccess(data));
  } catch (error) {
    toast.error('Операции с продуктами не доступны');
    dispatch(productsActions.getProductsByDayError(error.message));
  }
};

const addProducts = values => async dispatch => {
  dispatch(productsActions.addProductsOnDayRequest());

  const { data } = await axios.post('/products', { ...values });
  try {
    dispatch(productsActions.addProductsOnDaySuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(productsActions.addProductsOnDayError(error.message));
  }
};

const deleteProducts = productId => async dispatch => {
  dispatch(productsActions.deleteProductsOnDayRequest());
  try {
    const { data } = await axios.delete(`/products/${productId}`);
    dispatch(productsActions.deleteProductsOnDaySuccess({ productId, data }));
  } catch (error) {
    toast.error(error.message);
    dispatch(productsActions.deleteProductsOnDayError(error.message));
  }
};

/* eslint-disable import/no-anonymous-default-export */
export default {
  getProductsByDay,
  addProducts,
  deleteProducts,
};
