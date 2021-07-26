import { createAction } from '@reduxjs/toolkit';


const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');


export default  {
    logoutRequest,
    logoutSuccess,
    logoutError,
}