import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './products-actions';

const initialStateProductsByDay = {
  dailyNormalProcent: '000',
  leftCalories: '000',
  totalCalories: '000',
};

const productsByDay = createReducer(initialStateProductsByDay, {
  [productsActions.getProductsByDaySuccess]: (_, { payload }) => payload,
});

const addedProducts = createReducer([], {
  [productsActions.addProductsOnDaySuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [productsActions.deleteProductsOnDaySuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const error = createReducer(null, {
  [productsActions.addProductsOnDayError]: (_, { payload }) => payload,
  [productsActions.deleteProductsOnDayError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [productsActions.addProductsOnDayRequest]: () => true,
  [productsActions.addProductsOnDaySuccess]: () => false,
  [productsActions.addProductsOnDayError]: () => false,
  [productsActions.deleteProductsOnDayRequest]: () => true,
  [productsActions.deleteProductsOnDaySuccess]: () => false,
  [productsActions.deleteProductsOnDayError]: () => false,
});

export default combineReducers({
  productsByDay,
  addedProducts,
  error,
  loading,
});
