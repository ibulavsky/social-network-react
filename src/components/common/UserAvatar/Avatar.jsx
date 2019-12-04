import React from 'react'
import userPhoto from "../../../assets/images/user.png";

const Avatar = ({photo, ...props}) => {
    const styleForAvatar = `${props.styled}`;
    return <>
        <img alt='Avatar'
             src={photo != null
                 ? photo : userPhoto}
             className={styleForAvatar}/>
    </>
}

export default Avatar;
