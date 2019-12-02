import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form'

export const SET_USER_DATA = 'SOCIAL-NETWORK/AUTH-REDUCER/SET_USER_DATA';

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
export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode !== 0) {
    } else if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    } else {
        console.error("Fail logout", response.data);
    }
}
