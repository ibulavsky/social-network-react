import React, {useRef} from 'react';
import s from "./ProfilePhoto.module.css";
import Avatar from "../../../common/UserAvatar/Avatar"
import Preloader from "../../../common/Preloader/Preloader"
import {useSelector} from "react-redux"
import {NavLink, useParams} from "react-router-dom"
import {DIALOGS_PATH} from "../../../Main/Routes"

const ProfilePhoto = ({addPhoto, isOwner}) => {

    const {isPhotoLoading, photos, errorPhotoLoadingMessage} = useSelector((state) => state.profilePage.profile)

    const {userId} = useParams()

    const inputElement = useRef(null);

    const changePhoto = () => {
        inputElement.current && inputElement.current.click();
    }

    const onPhotoUpload = (e) => {
        addPhoto(e.target.files[0])
    }
    return (
        <div style={{marginRight: '10px'}}>
            {isPhotoLoading
                ? <div style={{
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Preloader/>
                </div>
                : <Avatar photo={photos.large} styled={s.photo}/>}
            <div className={s.navLink}>
                {isOwner
                    ? <>
                        <input type='file' style={{display: 'none'}}
                               onChange={(e) => onPhotoUpload(e)}
                               ref={inputElement}
                        />
                        <button style={{height: '30px'}} onClick={changePhoto}>Change Photo</button>
                    </>
                    : <>
                        <NavLink to={`${DIALOGS_PATH}/${userId}`}>
                            <button style={{height: '30px'}}>Send Message</button>
                        </NavLink>
                    </>
                }
            </div>
            <span className={s.errorMessage}> {errorPhotoLoadingMessage || null} </span>
        </div>
    )
}

export default ProfilePhoto;
