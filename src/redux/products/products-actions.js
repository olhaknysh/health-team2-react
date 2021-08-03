import { createAction } from '@reduxjs/toolkit';

const getProductsByDayRequest = createAction(
  'products/getProductsByDayRequest',
);
const getProductsByDaySuccess = createAction(
  'products/getProductsByDaySuccess',
);
const getProductsByDayError = createAction('products/getProductsByDayError');

const addProductsOnDayRequest = createAction(
  'products/addProductsOnDayRequest',
);
const addProductsOnDaySuccess = createAction(
  'products/addProductsOnDaySuccess',
);
const addProductsOnDayError = createAction('products/addProductsOnDayError');

const deleteProductsOnDayRequest = createAction(
  'products/deleteProductsOnDayRequest',
);

const deleteProductsOnDayError = createAction(
  'products/deleteProductsOnDayError',
);

const deleteProductsOnDaySuccess = createAction(
  'products/deleteProductsOnDaySuccess',
);

/* eslint-disable import/no-anonymous-default-export */
export default {
  getProductsByDayRequest,
  getProductsByDaySuccess,
  getProductsByDayError,
  addProductsOnDayRequest,
  addProductsOnDaySuccess,
  addProductsOnDayError,
  deleteProductsOnDayRequest,
  deleteProductsOnDayError,
  deleteProductsOnDaySuccess,
};
