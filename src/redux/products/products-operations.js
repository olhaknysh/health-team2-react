import axios from 'axios';
import productsActions from './products-actions';

const getProductsByDay = date => async dispatch => {
  dispatch(productsActions.getProductsByDayRequest());

  try {
    const { data } = await axios.get(`/products/${date}`);

    dispatch(productsActions.getProductsByDaySuccess(data));
  } catch (error) {
    dispatch(productsActions.getProductsByDayError());
  }
};

const clearFieldsProductsByDay = () => dispatch => {
  dispatch(productsActions.clearProductsByDayRequest())
  try {
    dispatch(productsActions.clearProductsByDaySuccess())
  } catch (error) {
    dispatch(productsActions.clearProductsByDayError())
  }
}

const addProducts = values => async dispatch => {
  dispatch(productsActions.addProductsOnDayRequest());

  const { data } = await axios.post('/products', { ...values });
  try {
    dispatch(productsActions.addProductsOnDaySuccess(data));
  } catch (error) {
    dispatch(productsActions.addProductsOnDayError(error.message));
  }
};

const deleteProducts = productId => async dispatch => {
  dispatch(productsActions.deleteProductsOnDayRequest());
  try {
    await axios.delete(`/products/${productId}`);
    dispatch(productsActions.deleteProductsOnDaySuccess(productId));
  } catch (error) {
    dispatch(productsActions.deleteProductsOnDayError(error.message));
  }
};

/* eslint-disable import/no-anonymous-default-export */
export default {
  getProductsByDay,
  addProducts,
  deleteProducts,
  clearFieldsProductsByDay
};
