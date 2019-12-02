import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form'

export const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export default authReducer;
export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


// THUNK CREATOR:
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode !== 0) {
                // this.props.toggleIsFetching(true);
            } else if (data.resultCode === 0) {
                // this.props.toggleIsFetching(false);
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
};


export const login = (email, password, rememberMe) => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(response => {
            // switch (response.data.resultCode) {
            //     case 0:  dispatch(getAuthUserData());
            //     case 1: console.error("Fail login", response.data);
            //     default: console.log('Error')
            // }
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
};
export const logout = () => (dispatch) => {
    return authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            } else {
                console.error("Fail logout", response.data);
            }
        })
};
