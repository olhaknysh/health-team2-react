import { createAction } from '@reduxjs/toolkit';

const addCurrentDateRequest = createAction('calendar/addCurrentDateRequest');
const addCurrentDateSuccess = createAction('calendar/addCurrentDateSuccess');
const addCurrentDateError = createAction('calendar/addCurrentDateError');

const actions = {
  addCurrentDateRequest,
  addCurrentDateSuccess,
  addCurrentDateError,
};

export default actions;
