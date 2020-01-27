import {getAuthUserData} from "../auth/auth-thunks";

export const INITIALIZED_SUCCESS = 'SOCIAL-NETWORK/APP-REDUCER/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};
export default appReducer;
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


// THUNK CREATOR:
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};
