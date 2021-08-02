import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import calendarActions from './calendar-actions';

const currentDate = createReducer('', {
  [calendarActions.addCurrentDateSuccess]: (state, { payload }) => payload,
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
