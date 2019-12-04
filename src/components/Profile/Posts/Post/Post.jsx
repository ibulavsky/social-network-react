import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.myPost}>
            <img src='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-neytiri-sad.jpg' alt={'UserPhoto'}/>
            <div>{props.message}</div>
            <span className={s.like}>Like {props.likesCount}</span>
        </div>
    )
};


export default Post;
