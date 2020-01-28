import React from 'react'
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../common/UserAvatar/Avatar.jsx"
import {DIALOGS_PATH, PROFILE_PATH} from "../Main/Routes"

const User = ({user, followingInProgress, unfollow, follow}) => {

    const followClick = () => {
        follow(user.id)
    }
    const unFollowClick = () => unfollow(user.id)

    return <>
              <span className={s.user}>
                  <div className={s.photoContainer}>
                  <NavLink to={`${PROFILE_PATH}/${user.id}`}>
                                <Avatar photo={user.photos.small} styled={s.userPhoto}/>
                  </NavLink>
                      {user.followed
                          ? <button
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={unFollowClick}>Unfollow</button>
                          : <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={followClick}>Follow</button>}
                      <NavLink to={`${DIALOGS_PATH}/${user.id}`}>
                              <button>Dialog</button>
                      </NavLink>
                </div>
                   <span className={s.userDesc}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                   </span>
            </span>
    </>
}

export default User;
