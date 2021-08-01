import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './products-actions';

const initialStateProductsByDay = {
  "dailyNormalProcent": '000',
  "leftCalories": '000',
  "totalCalories": '000'
}

const productsByDay = createReducer(initialStateProductsByDay, {
  [productsActions.getProductsByDaySuccess]: (_, { payload }) => payload
});

export default combineReducers({
  productsByDay
});