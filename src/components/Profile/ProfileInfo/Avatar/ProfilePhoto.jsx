import React from 'react';
import s from "./ProfilePhoto.module.css";
import Avatar from "../../../common/UserAvatar/Avatar"

const ProfilePhoto = ({photo, addPhoto, isOwner, errorMessage}) => {

    const onPhotoUpload = (e) => {
        addPhoto(e.target.files[0])
    }
    return (
        <div>
            <Avatar photo={photo.large} styled={s.photo}/>
            <div>
                {isOwner &&
                <input type='file'
                       onChange={onPhotoUpload}/>
                }
            </div>
            <span className={s.errorMessage}> {errorMessage || null} </span>
        </div>
    )
}

export default ProfilePhoto;
