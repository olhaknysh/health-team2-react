import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = '';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};



const logOut = () => async dispatch => {
        dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');
        
        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch(error) {
        dispatch(authActions.logoutError(error.message));
        
    }

};
 

   



export default { logOut};