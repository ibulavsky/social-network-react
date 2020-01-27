import {dialogsAPI} from "../../api/dialogs-api"
import {
    isLoadingDialogs,
    setCurrentInterlocutorId,
    setDialogs,
    setLoadingMessages,
    setMessages
} from "./dialogs-reducer"


export const getDialogs = () => async (dispatch) => {
    dispatch(isLoadingDialogs(true))
    const dialogsList = await dialogsAPI.getDialogs()
    dispatch(isLoadingDialogs(false))
    dispatch(setDialogs(dialogsList))
}

export const getMessages = (userId) => async (dispatch) => {
    dispatch(setLoadingMessages(true))
    const messagesList = await dialogsAPI.getMessage(userId)
    dispatch(setLoadingMessages(false))
    dispatch(setCurrentInterlocutorId(userId))
    dispatch(setMessages(messagesList))
}

export const sendMessage = (userId, message) => async (dispatch) => {
    dispatch(setLoadingMessages(true))
    const response = await dialogsAPI.sendMessage(userId, message)
    dispatch(setLoadingMessages(false))
    if (response.resultCode === 0) {
        dispatch(getMessages(userId))
    }
}

export const deleteMessage = (id, userId) => async (dispatch) => {
    dispatch(setLoadingMessages(true))
    const response = await dialogsAPI.deleteMessage(id)
    dispatch(setLoadingMessages(false))
    if (response.resultCode === 0) {
        dispatch(getMessages(userId))
    }
}
