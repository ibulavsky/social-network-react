import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png' alt={'Social Network'}/>
            PANDORA
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div><span> {props.login} - <button onClick={props.logout}> Log Out</button> </span></div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;
