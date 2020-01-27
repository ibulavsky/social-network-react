import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile/profile-reducer";
import dialogsReducer from "./dialogs/dialogs-reducer";
import sidebarReducer from "./sidebar-following/sidebar-reducer";
import usersReducer from "./users/users-reducer";
import authReducer from "./auth/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./main/app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store;
