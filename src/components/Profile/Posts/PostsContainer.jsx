// import React from 'react';
import {connect} from 'react-redux'
import {addPostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            // props.addPost();
            dispatch(addPostActionCreator(newPostText));
            // ADD-POST
        },
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer
