import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {DIALOGS_PATH, PROFILE_PATH, USERS_PATH} from "../Main/Routes"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PROFILE_PATH} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={DIALOGS_PATH} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={USERS_PATH} activeClassName={s.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
