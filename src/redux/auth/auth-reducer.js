import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, login: null };

const user = createReducer(initialUserState, {
    [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
    [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [authActions.logoutError]: (_, { payload }) => payload,
});


const isAuthenticated = createReducer(false, {
    [authActions.logoutSuccess]: () => false,
});

const loading = createReducer(true, {
    [authActions.logoutRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false
})

export default combineReducers({
    user,
    token,
    isAuthenticated,
    error,
    loading
});
