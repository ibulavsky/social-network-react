import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogItem = (props) => {

    return (
        <div className={s.dialogWrapper}>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialog}>
                <div className={s.avatarWrapper}>
                    <img src={props.photo} alt='user avatar' className={s.avatar}/>
                </div>
                <div className={s.nameWrapper}>
                    {props.name}
                </div>
                {props.isNewMessage
                    ? <div className={s.newMessagesCountWrapper}>
                        <span className={s.newMessagesCount}>
                        {props.newMessagesCount}
                </span>
                    </div>
                    : null}
            </NavLink>
        </div>
    )
}

DialogItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default DialogItem;
