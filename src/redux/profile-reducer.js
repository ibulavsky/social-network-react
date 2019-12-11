import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form"

export const ADD_POST = "SOCIAL-NETWORK/PROFILE-REDUCER/ADD-POST";
export const SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_USER_PROFILE';
export const SET_STATUS = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_STATUS';
export const DELETE_POST = 'SOCIAL-NETWORK/PROFILE-REDUCER/DELETE_POST';
export const UPLOAD_PHOTO_SUCCESS = 'SOCIAL-NETWORK/PROFILE-REDUCER/UPLOAD_PHOTO_SUCCESS';
export const UPLOAD_PHOTO_ERROR = 'SOCIAL-NETWORK/PROFILE-REDUCER/UPLOAD_PHOTO_ERROR';

const initialState = {
    postsData: [
        {id: 1, message: 'My Post', likesCount: 1},
        {id: 2, message: 'My Post 2', likesCount: 3},
        {id: 3, message: "Hello World! What's up?", likesCount: 25},
    ],
    profile: null,
    status: '',
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case  SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case  DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }
        case
        SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        case
        UPLOAD_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };
        }
        case
        UPLOAD_PHOTO_ERROR: {
            return {
                ...state, profile: {...state.profile, errorMessage: action.message}
            };
        }

        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});
export const uploadPhotoError = (message) => ({type: UPLOAD_PHOTO_ERROR, message});

// THUNK CREATOR:
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const addPhoto = (myPhoto) => async (dispatch) => {
    const response = await profileAPI.uploadPhoto(myPhoto)
    if (response.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(response.data.data.photos))
    } else {
        dispatch(uploadPhotoError(response.data.messages[0]))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else if (response.data.resultCode === 1) {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}
