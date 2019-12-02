import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object-helper-immutable-change"

export const FOLLOW = 'SOCIAL-NETWORK/USERS-REDUCER/FOLLOW';
export const UNFOLLOW = 'SOCIAL-NETWORK/USERS-REDUCER/UNFOLLOW';
export const SET_USERS = 'SOCIAL-NETWORK/USERS-REDUCER/SET_USERS';
export const SET_CURRENT_PAGE = 'SOCIAL-NETWORK/USERS-REDUCER/SET_CURRENT_PAGE';
export const SET_USERS_TOTAL_COUNT = 'SOCIAL-NETWORK/USERS-REDUCER/SET_USERS_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'SOCIAL-NETWORK/USERS-REDUCER/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'SOCIAL-NETWORK/USERS-REDUCER/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
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
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
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
                    : state.followingInProgress.filter(id => id != action.userId)
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
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


// THUNK CREATORS:
export const requestUsers = (requestPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(requestPage));
    const data = await usersAPI.getUsers(requestPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    // apiMethod = usersAPI.follow.bind(usersAPI)
    // actionCreator = followSuccess
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    // apiMethod = usersAPI.unfollow.bind(usersAPI)
    //  actionCreator =  unfollowSuccess
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
