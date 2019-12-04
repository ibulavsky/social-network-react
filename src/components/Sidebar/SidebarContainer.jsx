// import React from 'react';
import {connect} from 'react-redux'
// import s from './Profile.module.css';
import Sidebar from "./Sidebar";


const mapStateToProps = (state) => {
    return {
        friendsName: state.sidebar.friendsName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect (mapStateToProps, mapDispatchToProps)(Sidebar);


export default SidebarContainer;
