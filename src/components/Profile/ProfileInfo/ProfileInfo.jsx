import React from 'react';
import s from './ProfileInfo.module.css';
import AboutYou from "./AboutYou/AboutYou";
import ProfilePhoto from "./Avatar/ProfilePhoto";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = ({profile, status, addPhoto, updateStatus,}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div><ProfilePhoto photo={profile.photos} addPhoto={addPhoto}/></div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <AboutYou profileData={profile}/>
            </div>
        </div>
    )
};


export default ProfileInfo;
