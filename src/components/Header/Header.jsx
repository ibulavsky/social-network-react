import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LOG_IN_PATH} from "../Main/Routes"

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <> <span> {props.login} - </span>
                            <button onClick={props.logout}> Log Out</button>
                        </>
                        : <NavLink to={LOG_IN_PATH}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;
