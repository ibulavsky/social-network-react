import store from "./redux-store"
import {setAuthUserData} from "./auth/auth-reducer"
import {setErrorHandler, setHandler401} from "../api/api"
import {setError} from "./main/app-reducer"

export const isError401 = () => {
    const callback401 = () => {
        return store.dispatch(setAuthUserData(null, null, null, false))
    }
    setHandler401(callback401)
}

export const isError = () => {
    const errorCallback = (errorMessage) => {
        return store.dispatch(setError(errorMessage))
    }
    setErrorHandler(errorCallback)
}
