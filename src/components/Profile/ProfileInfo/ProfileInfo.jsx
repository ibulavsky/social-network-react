import React from 'react';
import s from './ProfileInfo.module.css';
import AboutYou from "./AboutYou/AboutYou";
import Avatar from "./Avatar/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            {/*<img className={s.header} src="https://3dnews.ru/assets/external/illustrations/2016/12/27/945081/sm.png.750.png"/>*/}

            <div><Avatar photo={props.profile.photos} addPhoto={props.addPhoto}/></div>
            <div>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <AboutYou profileData={props.profile}/>
            </div>
        </div>
    )
};


export default ProfileInfo;
