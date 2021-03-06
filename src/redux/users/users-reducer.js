import {updateObjectArray} from "../../utils/object-helper-immutable-change"

export const FOLLOW = 'SOCIAL-NETWORK/USERS-REDUCER/FOLLOW';
export const UNFOLLOW = 'SOCIAL-NETWORK/USERS-REDUCER/UNFOLLOW';
export const SET_USERS = 'SOCIAL-NETWORK/USERS-REDUCER/SET_USERS';
export const SET_REDIRECT_TO_DIALOGS = 'SOCIAL-NETWORK/USERS-REDUCER/SET_REDIRECT_TO_DIALOGS';
export const SET_CURRENT_PAGE = 'SOCIAL-NETWORK/USERS-REDUCER/SET_CURRENT_PAGE';
export const SET_USERS_TOTAL_COUNT = 'SOCIAL-NETWORK/USERS-REDUCER/SET_USERS_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'SOCIAL-NETWORK/USERS-REDUCER/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'SOCIAL-NETWORK/USERS-REDUCER/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    redirectToDialogId: null,
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_REDIRECT_TO_DIALOGS: {
            return {
                ...state,
                redirectToDialogId: action.userId
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};
export default usersReducer;

// Action Creators:

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setRedirectToDialog = (userId) => ({type: SET_REDIRECT_TO_DIALOGS, userId});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});
