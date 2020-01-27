// THUNK CREATOR:
import {
    isPhotoLoading,
    isProfileLoading,
    setStatus,
    setUserProfile,
    uploadPhotoError,
    uploadPhotoSuccess
} from "./profile-reducer"
import {stopSubmit} from "redux-form"
import {profileAPI, usersAPI} from "../../api/api"

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(isProfileLoading(true))
    const response = await usersAPI.getProfile(userId)
    dispatch(isProfileLoading(false))
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const addPhoto = (myPhoto) => async (dispatch) => {
    dispatch(isPhotoLoading(true))
    const response = await profileAPI.uploadPhoto(myPhoto)
    dispatch(isPhotoLoading(false))
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
