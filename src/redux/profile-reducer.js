import {profileAPI, usersAPI} from "../api/api";


export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';

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
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
};

export const addPhoto = (myPhoto) => (dispatch) => {
    profileAPI.downloadPhoto(myPhoto)
        .then(response => {
            if (response.data.data.resultCode === 0) {
                console.log('photo', response.data.data.photos.large)

            }
        })
};
