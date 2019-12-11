import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileDesc from "./ProfileDescription/ProfileDesc";
import ProfilePhoto from "./Avatar/ProfilePhoto";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks"
import ProfileDescForm from "./ProfileDescription/ProfileDescForm"


const ProfileInfo = ({profile, status, addPhoto, updateStatus, isOwner, saveProfile}) => {
        let [isEditMode, setEditMode] = useState(false)

        if (!profile) {
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
                <ProfilePhoto photo={profile.photos}
                              addPhoto={addPhoto}
                              isOwner={isOwner}
                              errorMessage={profile.errorMessage}/>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {isEditMode
                        ? <ProfileDescForm initialValues={profile}
                                           profileData={profile}
                                           onSubmit={onSubmit}/>
                        : <ProfileDesc profileData={profile}
                                       changeData={setEditMode}
                                       isOwner={isOwner}/>
                    }
                </div>

            </div>

        )
    }
;


export default ProfileInfo;
