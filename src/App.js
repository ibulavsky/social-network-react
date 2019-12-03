import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/HeaderCountainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ad from "./components/Ad/Ad";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

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
                        <Route path='/News' component={News}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Login' render={() => <LoginPage/>}/>
                    </div>
                    < Ad/>
                    < Footer/>
                </div>

            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
