import React, {Component, Suspense} from 'react';
import './App.css';
import Header from "./components/Header/HeaderCountainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ad from "./components/Ad/Ad";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store"
import {withSuspense} from "./hoc/withSuspense"
import DialogsContainer from "./components/Dialogs/DialogsContainer"

const News = React.lazy(() => import('./components/News/News'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    < Header/>
                    < Navbar/>
                    < SidebarContainer className="sidebar"/>
                    <div className='app-wrapper-content'>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/News' render={withSuspense(News)}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Users' render={withSuspense(UsersContainer)}/>
                        <Route path='/Login' render={() => <LoginPage/>}/>
                    </div>
                    < Ad/>
                    < Footer/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </>
    )
}

export default MainApp
