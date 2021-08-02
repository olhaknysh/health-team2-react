import { createAction } from '@reduxjs/toolkit';

const getProductsByDayRequest = createAction('products/getProductsByDayRequest');
const getProductsByDaySuccess = createAction('products/getProductsByDaySuccess');
const getProductsByDayError = createAction('products/getProductsByDayError');

/* eslint-disable import/no-anonymous-default-export */
export default {
  getProductsByDayRequest,
  getProductsByDaySuccess,
  getProductsByDayError
};