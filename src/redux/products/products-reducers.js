import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './products-actions';
import authActions from '../auth/auth-actions';


const dailyNormalProcent = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { dailyNormalProcent } }) => dailyNormalProcent,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { dailyNormalProcent } }) => dailyNormalProcent,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { dailyNormalProcent } } }) => dailyNormalProcent,
    [productsActions.getProductsByDayError]: () => 0,
    [authActions.logoutSuccess]: () => 0
})

const leftCalories = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { leftCalories } }) => leftCalories,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { leftCalories } }) => leftCalories,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { leftCalories } } }) => leftCalories,
    [productsActions.getProductsByDayError]: () => 0,
    [authActions.logoutSuccess]: () => 0
})

const totalCalories = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { totalCalories } }) => totalCalories,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { totalCalories } }) => totalCalories,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { totalCalories } } }) => totalCalories,
    [productsActions.getProductsByDayError]: () => 0,
    [authActions.logoutSuccess]: () => 0
})

const productsByDay = createReducer([], {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { products } }) => products,
    [productsActions.getProductsByDayError]: () => [],
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { products } }) => products,
    [productsActions.deleteProductsOnDaySuccess]: (state, { payload: { productId } }) =>
        state.filter(({ _id }) => _id !== productId),
    [authActions.logoutSuccess]: () => []
});

const error = createReducer(null, {
    [productsActions.getProductsByDayError]: (_, { payload }) => payload,
    [productsActions.addProductsOnDayError]: (_, { payload }) => payload,
    [productsActions.deleteProductsOnDayError]: (_, { payload }) => payload,
    [productsActions.getProductsByDaySuccess]: () => null,
    [productsActions.addProductsOnDaySuccess]: () => null,
    [productsActions.deleteProductsOnDaySuccess]: () => null,
    [authActions.logoutSuccess]: () => null
});

const loading = createReducer(false, {
    [productsActions.getProductsByDayRequest]: () => true,
    [productsActions.getProductsByDaySuccess]: () => false,
    [productsActions.getProductsByDayError]: () => false,
    [productsActions.addProductsOnDayRequest]: () => true,
    [productsActions.addProductsOnDaySuccess]: () => false,
    [productsActions.addProductsOnDayError]: () => false,
    [productsActions.deleteProductsOnDayRequest]: () => true,
    [productsActions.deleteProductsOnDaySuccess]: () => false,
    [productsActions.deleteProductsOnDayError]: () => false,
});

export default combineReducers({
    productsByDay,
    error,
    loading,
    dailyNormalProcent,
    leftCalories,
    totalCalories
});
