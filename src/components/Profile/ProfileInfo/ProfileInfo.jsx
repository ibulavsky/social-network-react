import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileDesc from "./ProfileDescription/ProfileDesc";
import ProfilePhoto from "./Avatar/ProfilePhoto";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks"
import ProfileDescForm from "./ProfileDescription/ProfileDescForm"
import {useSelector} from "react-redux"


const ProfileInfo = ({errorMessage, isLoading, addPhoto, updateStatus, isOwner, saveProfile}) => {

        const [isEditMode, setEditMode] = useState(false)

        const profile = useSelector((state) => state.profilePage.profile)
        const status = useSelector((state) => state.profilePage.status)

        if (isLoading) {
            return <Preloader/>
        }

        const onSubmit = (formData) => {
            saveProfile(formData)
                .then(
                    () => {
                        setEditMode(false)
                    }
                )
        }

        return (
            <div className={s.profileInfo}>
                {errorMessage ? <div style={{color: 'red'}}>{errorMessage}</div>
                    : <>
                        <ProfilePhoto addPhoto={addPhoto} isOwner={isOwner}/>
                        <div>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            {isEditMode
                                ? <ProfileDescForm initialValues={profile}
                                                   onSubmit={onSubmit}/>
                                : <ProfileDesc profileData={profile}
                                               changeData={setEditMode}
                                               isOwner={isOwner}/>
                            }
                        </div>
                    </>}
            </div>

        )
    }
;


export default ProfileInfo;
