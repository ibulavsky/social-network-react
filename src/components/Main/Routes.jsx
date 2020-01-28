import React from 'react'
import DialogsContainer from "../Dialogs/DialogsContainer"
import ProfileContainer from "../Profile/ProfileContainer"
import {withSuspense} from "../../hoc/withSuspense"
import LoginPage from "../Login/Login"
import {Redirect, Route, Switch} from "react-router-dom"
import UsersContainer from "../Users/UsersContainer"
import '../../App.css'

export const START_GH_PAGES_PATH = '/social-network-react';
export const LOG_IN_PATH = START_GH_PAGES_PATH + '/login';
export const DIALOGS_PATH = START_GH_PAGES_PATH + '/dialogs';
export const PROFILE_PATH = START_GH_PAGES_PATH + '/profile';
export const USERS_PATH = START_GH_PAGES_PATH + '/users';

const Routes = () => (
    <div className="app-content">
        <Switch>
            <Route exact path='/' render={() => <Redirect to={PROFILE_PATH}/>}/>
            <Route path={DIALOGS_PATH + '/:userId?'} render={() => <DialogsContainer/>}/>
            <Route path={PROFILE_PATH + '/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={USERS_PATH} render={withSuspense(UsersContainer)}/>
            <Route path={LOG_IN_PATH} render={() => <LoginPage/>}/>
            <Route path='*'
                   render={() => <div style={{width: '525px'}}> ERROR 404. Page Not
                       Found</div>}/>
        </Switch>
    </div>
)

export default Routes;
