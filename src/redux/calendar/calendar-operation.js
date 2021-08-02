import axios from 'axios';
import calendarActions from './calendar-actions';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const addCurrentDateProducts = credentials => async dispatch => {
  dispatch(calendarActions.addCurrentDateRequest());
  const { data } = await axios.post('/');

  try {
    dispatch(calendarActions.addCurrentDateSuccess(data));
  } catch (error) {
    dispatch(calendarActions.addCurrentDateError(error.message));
  }
};

const operations = {
  addCurrentDateProducts,
};

export default operations;
