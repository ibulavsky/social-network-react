import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux'
import {addPhoto, getStatus, getUserProfile, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    addPhoto = (myPhoto) => {
        this.props.addPhoto(myPhoto)
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     errorMessage={this.props.errorMessage}
                     isLoading={this.props.isLoading}
                     updateStatus={this.props.updateStatus}
                     addPhoto={this.addPhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    errorMessage: state.profilePage.errorMessage,
    isLoading: state.profilePage.isLoading,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
