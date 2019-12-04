import React from 'react';
import s from "./AboutYou.module.css";
// import PropTypes from 'prop-types';

const AboutYou = (props) => {
    let objContacts = props.profileData.contacts;
    let arrContacts = [];
    for (let key in objContacts) {
        if (!objContacts[key]) {
            arrContacts.push(`${key} : ${objContacts[key]}`)
        }
    }
    return (
        <div className={s.descriptionProfile}>
            <div className={s.name}>
                {props.profileData.fullName}
            </div>
            <div>About:
                {props.profileData.aboutMe}
            </div>
            <div>
                Looking For A JOB:
                <input type='checkbox' checked={props.profileData.lookingForAJob}/>
                <div>
                    Description: {props.profileData.lookingForAJobDescription}
                </div>
            </div>
            <div>
                contacts:
                {arrContacts.map(c => <div>{c}</div>)}
            </div>

        </div>
    )
};

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

export default AboutYou;
