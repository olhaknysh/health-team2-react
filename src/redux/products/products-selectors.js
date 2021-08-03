import { createSelector } from '@reduxjs/toolkit';
const totalEatedCalories = state => state.products.productsByDay.totalCalories;
const getProductsByDay = state => state.products.productsByDay.products;
const isLoading = state => state.products.loading;

const leftCalories = state => state.products.productsByDay.leftCalories;

const dailyNormalProcent = state =>
  state.products.productsByDay.dailyNormalProcent;

const getProducts = ({ products }) => products.addedProducts;

const getProduct = id =>
  createSelector([getProducts], products => {
    return products.find(({ _id }) => _id === id);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  totalEatedCalories,
  leftCalories,
  dailyNormalProcent,
  getProducts,
  getProduct,
  getProductsByDay,
  isLoading,
};
