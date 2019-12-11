import React from 'react';
// import s from './Profile.module.css';
// import PropTypes from 'prop-types';


const Sidebar = (props) => {
    return (
        <div>
            Friends:
            {props.friendsName.map((m) => <div key={m.id}> {m.name} </div>)}
        </div>
    )
};

export default Sidebar;
