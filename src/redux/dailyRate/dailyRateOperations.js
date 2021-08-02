import axios from "axios";
import dailyRateActions from "./dailyRateActions";

axios.defaults.baseURL = "https://slim-mom-app.herokuapp.com/api";


const onFetchDailyRates = (values) => (dispatch) => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post("/users/calories", values)
    .then((receivedData) => {
      console.log(receivedData.data)
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch((error) => {
      dispatch(dailyRateActions.fetchDailyRateError(error));
    });
};

const onFetchDailyRatesAuthorised = (values, userId) => (dispatch, getState) => {
  dispatch(dailyRateActions.fetchDailyRateRequestAuth());

  axios
    .post(`/users/${userId}/calories`, values)
    .then((receivedData) => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
      // console.log('NICE', receivedData.data)
    })
    .catch((error) => {
      dispatch(dailyRateActions.fetchDailyRateErrorAuth(error));
    });
};

// eslint-disable-next-line
export default {
  onFetchDailyRates,
  onFetchDailyRatesAuthorised,
};
