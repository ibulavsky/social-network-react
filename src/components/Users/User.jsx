import React from 'react'
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../common/UserAvatar/Avatar.jsx"

const User = ({user, followingInProgress, unfollow, follow}) => {

    const followClick = () => {
        follow(user.id)
    }
    const unFollowClick = () => unfollow(user.id)

    return <>
              <span className={s.user}>
                  <div className={s.photoContainer}>
                  <NavLink to={`profile/${user.id}`}>
                                <Avatar photo={user.photos.small} styled={s.userPhoto}/>
                  </NavLink>
                      {user.followed
                          ? <button
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={unFollowClick}>Unfollow</button>
                          : <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={followClick}>Follow</button>}
                </div>
                   <span className={s.userDesc}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                   </span>
            </span>
    </>
}

export default User;
