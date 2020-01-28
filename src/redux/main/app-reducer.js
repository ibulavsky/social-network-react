import {getAuthUserData} from "../auth/auth-thunks";

export const INITIALIZED_SUCCESS = 'SOCIAL-NETWORK/APP-REDUCER/INITIALIZED_SUCCESS';
export const SET_ERROR = 'SOCIAL-NETWORK/APP-REDUCER/SET_ERROR';

const initialState = {
    initialized: false,
    errorMessage: '',
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};
export default appReducer;
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});


// THUNK CREATOR:
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};
