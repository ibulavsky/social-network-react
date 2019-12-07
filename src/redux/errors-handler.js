import store from "./redux-store"
import {setAuthUserData} from "./auth-reducer"
import {setHandler401} from "../api/api"

export const isError401 = () => {
    const callback401 = () => {
        return store.dispatch(setAuthUserData(null, null, null, false))
    }
    setHandler401(callback401)
}

