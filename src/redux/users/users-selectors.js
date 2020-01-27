// import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
export const getRedirectToDialogId = (state) => {
    return state.usersPage.redirectToDialogId;
};


// reselector Example
// export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
//         if (!isFetching) {
//             return users.filter(u => true)
//         }
//     }
// );
