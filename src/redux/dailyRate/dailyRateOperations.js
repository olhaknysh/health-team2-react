import axios from 'axios';
import dailyRateActions from './dailyRateActions';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const onFetchDailyRates = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post('/users/calories', values)
    .then(receivedData => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch(error => {
      toast.error(error.message);
      dispatch(dailyRateActions.fetchDailyRateError(error.message));
    });
};

const onFetchDailyRatesAuthorised =
  (values, userId) => (dispatch, getState) => {
    dispatch(dailyRateActions.fetchDailyRateRequestAuth());

    axios
      .post(`/users/${userId}/calories`, values)
      .then(receivedData => {
        dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
      })
      .catch(error => {
        toast.error(error.message);
        dispatch(dailyRateActions.fetchDailyRateErrorAuth(error.message));
      });
  };

// eslint-disable-next-line
export default {
  onFetchDailyRates,
  onFetchDailyRatesAuthorised,
};
