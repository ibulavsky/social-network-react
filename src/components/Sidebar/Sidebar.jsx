import React from 'react';
import '../../App.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            Friends:
            {props.friendsName.map((m) => <div key={m.id}> {m.name} </div>)}
        </div>
    )
};

export default Sidebar;
