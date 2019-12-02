import {profileAPI, usersAPI} from "../api/api";


export const ADD_POST = "SOCIAL-NETWORK/PROFILE-REDUCER/ADD-POST";
export const SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_USER_PROFILE';
export const SET_STATUS = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_STATUS';
export const DELETE_POST = 'SOCIAL-NETWORK/PROFILE-REDUCER/DELETE_POST';

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
                ...state, postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        case
        SET_STATUS: {
            return {
                ...state, status: action.status
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
    const response = await profileAPI.downloadPhoto(myPhoto)
    if (response.data.data.resultCode === 0) {
        console.log('photo', response.data.data.photos.large)
    }
}
