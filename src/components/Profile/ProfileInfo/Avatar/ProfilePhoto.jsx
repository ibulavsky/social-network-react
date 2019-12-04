import React from 'react';
import s from "./ProfilePhoto.module.css";
import Avatar from "../../../common/UserAvatar/Avatar"

const ProfilePhoto = ({photo, addPhoto}) => {

    const handleChange = (e) => {
        addPhoto(e.target.files[0])
    }
    return (
        <div>
            <Avatar photo={photo.large} styled={s.photo}/>
            <div>
                <input type='file'
                       onChange={handleChange}/>
            </div>
        </div>
    )
}

export default ProfilePhoto;
