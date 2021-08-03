import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import calendarActions from './calendar-actions';

const startDate = moment(new Date()).format('L').split('/');
const day = startDate[1];
const month = startDate[0];
const year = startDate[2];
const date = `${day}-${month}-${year}`;

const currentDate = createReducer(`${date}`, {
  [calendarActions.addCurrentDateSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [calendarActions.addCurrentDateError]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [calendarActions.addCurrentDateRequest]: () => true,
  [calendarActions.addCurrentDateSuccess]: () => false,
  [calendarActions.addCurrentDateError]: () => false,
});

export default combineReducers({
  currentDate,
  loader,
  error,
});
