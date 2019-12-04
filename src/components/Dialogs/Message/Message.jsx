import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div>{props.message}</div>
            <img src='https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h700.jpg' alt={'AutorPhoto'}/>
        </div>
    );
};

export default Message;
