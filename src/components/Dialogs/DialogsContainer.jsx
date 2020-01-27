// import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs/dialogs-reducer";
import {getMessages} from "../../redux/dialogs/dialogs-thunks"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom"

const mapStateToProps = (state) => {
    return {
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage: sendMessageCreator, getMessages}),
    withRouter,
    withAuthRedirect
)(Dialogs);
