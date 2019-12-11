import React from 'react';
import s from "./ProfileDesc.module.css";
import rightTick from '../../../../assets/images/right-tick.svg'
import falseTick from '../../../../assets/images/false-tick.svg'
// import PropTypes from 'prop-types';

const ProfileDesc = (props) => {

        const Contact = ({contactTitle, contactValue}) => <div className={s.contactTitle}>
            <b>{contactTitle}:</b> {contactValue}</div>

        let objContacts = props.profileData.contacts;
        let arrContacts = Object.keys(objContacts)
            .filter(key => objContacts[key])
            .map(key => <Contact key={key} contactTitle={key} contactValue={objContacts[key]}/>)

        return (
            <div className={s.descriptionProfile}>
                {props.isOwner &&
                <div>
                    <button onClick={() => props.changeData(true)}>edit</button>
                </div>
                }
                <span className={s.name}>
                        {props.profileData.fullName}
                </span>
                <div>
                    <b>About:</b>
                    {props.profileData.aboutMe}
                </div>
                <div>
                    <b>Looking For A JOB:</b>
                    {props.profileData.lookingForAJob
                        ? <img src={rightTick} alt={'right tick'} className={s.icon}/>
                        : <img src={falseTick} alt={'false tick'} className={s.icon}/>
                    }
                </div>
                {props.profileData.lookingForAJobDescription &&
                <div>
                    <b>My Skills:</b> {props.profileData.lookingForAJobDescription}
                </div>}
                {(arrContacts.length !== 0) ?
                    <>
                        <b>Contacts:</b>
                        {arrContacts}
                    </> : null
                }
            </div>
        )
    }
;

// AboutYou.propTypes = {
//     profileData: PropTypes.objectOf(PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             age: PropTypes.number.isRequired,
//             filmsList: PropTypes.string.isRequired,
//             musicList: PropTypes.string.isRequired
//         }
//         ).isRequired
//     ).isRequired
// };

export default ProfileDesc;
