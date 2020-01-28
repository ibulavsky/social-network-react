import React, {Component, Suspense} from 'react';
import './App.css';
import Header from "./components/Header/HeaderCountainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/main/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store"
import ModalsPage from "./components/common/ErrorModal/ModalsPage"
import Routes from "./components/Main/Routes"

const News = React.lazy(() => import('./components/News/News'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends Component {

    catchAllUnhandledErrors = (reason, promise) => {
        // alert('Some error')
        console.error(promise)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <Header/>
                    <ModalsPage/>
                    <div className='app-wrapper-content'>
                        <div className='app-navbar'>
                            < Navbar/>
                            < SidebarContainer/>
                        </div>
                        <Routes/>
                    </div>
                    <Footer/>
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
