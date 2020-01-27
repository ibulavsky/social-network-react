
export const ADD_POST = "SOCIAL-NETWORK/PROFILE-REDUCER/ADD-POST";
export const SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_USER_PROFILE';
export const LOADING_PROFILE = 'SOCIAL-NETWORK/PROFILE-REDUCER/LOADING_PROFILE';
export const SET_STATUS = 'SOCIAL-NETWORK/PROFILE-REDUCER/SET_STATUS';
export const DELETE_POST = 'SOCIAL-NETWORK/PROFILE-REDUCER/DELETE_POST';
export const UPLOAD_PHOTO_SUCCESS = 'SOCIAL-NETWORK/PROFILE-REDUCER/UPLOAD_PHOTO_SUCCESS';
export const UPLOAD_PHOTO_ERROR = 'SOCIAL-NETWORK/PROFILE-REDUCER/UPLOAD_PHOTO_ERROR';
export const LOADING_PHOTO = 'SOCIAL-NETWORK/PROFILE-REDUCER/LOADING_PHOTO';

const initialState = {
        postsData: [
            // {id: 1, message: 'My Post', likesCount: 1},
            // {id: 2, message: 'My Post 2', likesCount: 3},
            {id: 3, message: "Hello World! What's up?", likesCount: 25},
        ],
        profile:
            {
                aboutMe: '',
                contacts: {facebook: ''},
                lookingForAJob: true,
                lookingForAJobDescription: '',
                fullName: '',
                userId: null, //number
                photos: {small: '', large: ''},
                isPhotoLoading: false,
                errorPhotoLoadingMessage: '',
            },
        status: '',
        isLoading: false,
        errorMessage: '',
    }
;


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
                ...state, profile: {...state.profile, ...action.profile}
            };
        }
        case  LOADING_PROFILE: {
            return {
                ...state, isLoading: action.isLoading
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
                ...state, profile: {...state.profile, errorPhotoLoadingMessage: action.message}
            };
        }
        case
        LOADING_PHOTO: {
            return {
                ...state, profile: {...state.profile, isPhotoLoading: action.isLoading}
            };
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const isProfileLoading = (isLoading) => ({type: LOADING_PROFILE, isLoading});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});
export const uploadPhotoError = (message) => ({type: UPLOAD_PHOTO_ERROR, message});
export const isPhotoLoading = (isLoading) => ({type: LOADING_PHOTO, isLoading});

