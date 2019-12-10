import React from 'react';
import s from './../Dialogs.module.css';

function Message(props) {
    return <>

        <div className={s.message}>
            <div>
                <span className={s.autorName}>
                    {props.name}:
                </span>
                <span className={s.textMessage}>
                    "{props.message}"
            </span>

            </div>
        </div>
    </>

}

export default Message;
