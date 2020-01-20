import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <> <span> {props.login} - </span>
                            <button onClick={props.logout}> Log Out </button>
                        </>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;
