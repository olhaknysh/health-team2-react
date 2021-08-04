import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './products-actions';


const dailyNormalProcent = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { dailyNormalProcent } }) => dailyNormalProcent,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { dailyNormalProcent } }) => dailyNormalProcent,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { dailyNormalProcent } } }) => dailyNormalProcent,
    [productsActions.getProductsByDayError]: () => 0
})

const leftCalories = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { leftCalories } }) => leftCalories,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { leftCalories } }) => leftCalories,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { leftCalories } } }) => leftCalories,
    [productsActions.getProductsByDayError]: () => 0
})

const totalCalories = createReducer(0, {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { totalCalories } }) => totalCalories,
    [productsActions.addProductsOnDaySuccess]: (_, { payload: { totalCalories } }) => totalCalories,
    [productsActions.deleteProductsOnDaySuccess]: (_, { payload: { data: { totalCalories } } }) => totalCalories,
    [productsActions.getProductsByDayError]: () => 0
})

const productsByDay = createReducer([], {
    [productsActions.getProductsByDaySuccess]: (_, { payload: { products } }) => products,
    [productsActions.getProductsByDayError]: () => [],
    [productsActions.addProductsOnDaySuccess]: (state, { payload: { product } }) => [
        ...state,
        product,
    ],
    [productsActions.deleteProductsOnDaySuccess]: (state, { payload: { productId } }) =>
        state.filter(({ _id }) => _id !== productId),
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
    error,
    loading,
    dailyNormalProcent,
    leftCalories,
    totalCalories
});
