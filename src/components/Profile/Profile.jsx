import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import PropTypes from 'prop-types';
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         addPhoto={props.addPhoto} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
            <PostsContainer isOwner={props.isOwner}/>
        </div>
    )
};


// Profile.PropTypes = {
//     state: PropTypes.objectOf(PropTypes.shape({
//         profilePage: PropTypes.objectOf.isRequired,
//         postsData: PropTypes.objectOf.isRequired
//     }).isRequired).isRequired
// }

export default Profile;
