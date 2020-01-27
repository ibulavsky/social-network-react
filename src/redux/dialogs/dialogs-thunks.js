import {dialogsAPI} from "../../api/dialogs-api"
import {isLoadingDialogs, setDialogs, setLoadingMessages, setMessages} from "./dialogs-reducer"


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
    dispatch(setMessages(messagesList))
}
