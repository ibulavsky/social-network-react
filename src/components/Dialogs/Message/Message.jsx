import React from 'react';
import cn from 'classnames';
import s from './../Dialogs.module.css';

function Message(props) {
    return <>

        <div className={cn(s.message, {[`${s.unViewed}`]: !props.viewed})}>
            <div>
                <span className={s.autorName}>
                    {props.name}:
                </span>
                <span className={s.textMessage}>
                    {props.message}
            </span>
                <button onClick={() => props.deleteMessage(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    </>
}

export default Message;
