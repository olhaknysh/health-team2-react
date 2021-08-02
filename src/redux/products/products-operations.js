import axios from 'axios';
import productsActions from './products-actions';

const getProductsByDay = date => async dispatch => {
  dispatch(productsActions.getProductsByDayRequest());

  try {
    const day = await axios.get(`/products/${date}`);

    dispatch(productsActions.getProductsByDaySuccess(day.data));
  } catch (error) {
    dispatch(productsActions.getProductsByDayError());
  }
}

/* eslint-disable import/no-anonymous-default-export */
export default {
  getProductsByDay
};