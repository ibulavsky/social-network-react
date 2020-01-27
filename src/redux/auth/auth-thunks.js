import {authAPI, securityAPI} from "../../api/auth-api"
import {stopSubmit} from 'redux-form'
import {getCaptchaUrlSuccess, setAuthUserData} from "./auth-reducer"

// THUNK CREATOR:
export const getAuthUserData = () => async (dispatch) => {
    try {
        const data = await authAPI.me()
        if (data.resultCode !== 0) {
        } else if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch (error) {
        console.error(
            // error.response.message ? error.response.message :
            'error');
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    try {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            // success
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: message}));
        }
    } catch (error) {
        console.error(error.response.message);
    }
}

export const logout = () => async (dispatch) => {
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            console.error("Fail logout", response.data);
        }
    } catch (error) {
        console.error(error.response.message);
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptchaUrl()
        const captchUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchUrl));
    } catch (error) {
        console.error(error.response.message);
    }
}
