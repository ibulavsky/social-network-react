import React from 'react';
import s from "./ProfileDesc.module.css";
import {createField, Input, Textarea} from "../../../common/FormsControl/FormsControls"
import {reduxForm} from "redux-form"
import styles from "../../../common/FormsControl/FormsControls.module.css"

const ProfileDescForm = ({profile, handleSubmit, error, ...props}) => {

    const objContacts = props.profileData.contacts;
    const arrContacts = Object.keys(objContacts)
        .map(key => <div key={key} className={s.descElementWrap}>
            <b className={s.descElementTitle}>{key}:</b> {createField(key, "contacts." + key, [], Input)}
        </div>)

    return (
        <form className={s.editForm} onSubmit={handleSubmit}>
            <div className={s.editDescription}>
                <div className={s.descElementWrap}>
                    <b className={s.descElementTitle}>Full name:</b>
                    {createField('full name', "fullName", [], Input)}
                </div>
                <div className={s.descElementWrap}>
                    <b className={s.descElementTitle}>About:</b>
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div className={s.descElementWrap}>
                    <b className={s.descElementTitle}>Looking For A JOB</b>
                    {createField("Looking for a job", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div className={s.descElementWrap}>
                    <b className={s.descElementTitle}>My Skills:</b>
                    {createField("My Skills", "lookingForAJobDescription", [], Textarea)}
                </div>
            </div>
            {arrContacts}
            <div>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
            </div>
            <div className={s.btnSubmit}>
                <button>submit</button>
            </div>
        </form>
    )
}

const ProfileDescFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDescForm)

export default ProfileDescFormReduxForm;
