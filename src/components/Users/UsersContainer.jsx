import React from 'react';
import {
    follow, unfollow, requestUsers
} from "../../redux/users/users-thunks";
import {connect} from "react-redux";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getRedirectToDialogId,
    getTotalUsersCount,
    getUsers
} from "../../redux/users/users-selectors";
import {setCurrentPage, toggleIsFollowingProgress} from "../../redux/users/users-reducer"
import {startDialog} from "../../redux/dialogs/dialogs-thunks"
import {Redirect} from "react-router-dom"


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }


    render() {

        if (this.props.userId) {
            return <Redirect to={`/dialogs/${this.props.userId}`}/>
        }

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   startDialog={this.props.startDialog}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        userId: getRedirectToDialogId(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingProgress, startDialog, getUsers: requestUsers
    }))(UsersContainer)
