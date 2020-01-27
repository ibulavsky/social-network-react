import {stopSubmit} from 'redux-form'
import {authAPI, securityAPI} from "../../api/auth-api"

export const SET_USER_DATA = 'SOCIAL-NETWORK/AUTH-REDUCER/SET_USER_DATA';
export const GET_CAPTCHA_URL_SUCCESS = 'SOCIAL-NETWORK/AUTH-REDUCER/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        default:
            return state;
    }
};
export default authReducer;
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

