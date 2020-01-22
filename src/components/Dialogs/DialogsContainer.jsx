// import React from 'react';
import {getMessages, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage: sendMessageCreator, getMessages}),
    withAuthRedirect
)(Dialogs);
