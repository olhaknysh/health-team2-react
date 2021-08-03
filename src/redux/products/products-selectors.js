import { createSelector } from '@reduxjs/toolkit';
const totalEatedCalories = state => state.products.totalCalories;
const getProductsByDay = state => state.products.productsByDay;
const isLoading = state => state.products.loading;

const leftCalories = state => state.products.leftCalories;

const dailyNormalProcent = state =>
    state.products.dailyNormalProcent;


const getProduct = id =>
    createSelector([getProductsByDay], products => {
        return products.find(({ _id }) => _id === id);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    totalEatedCalories,
    leftCalories,
    dailyNormalProcent,
    getProduct,
    getProductsByDay,
    isLoading,
};
