import axios from 'axios';
import calendarActions from './calendar-actions';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const addCurrentDate = date => async dispatch => {
  dispatch(calendarActions.addCurrentDateRequest());
  try {
    dispatch(calendarActions.addCurrentDateSuccess(date));
  } catch (error) {
    dispatch(calendarActions.addCurrentDateError(error.message));
  }
};

const operations = {
  addCurrentDate,
};

export default operations;
