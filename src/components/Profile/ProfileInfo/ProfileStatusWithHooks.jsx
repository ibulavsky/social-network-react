import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => setStatus(e.currentTarget.value);

    return (
        <div className={s.status}>
            {!editMode &&
            <div>
                           <span onDoubleClick={activateEditMode}>
                               {props.status || "no-status"}
                           </span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

