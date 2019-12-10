import React from 'react'
import {maxLength, maxLengthCreator} from "../../../utils/validators/validators"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/FormsControl/FormsControls"
import s from './SendForm.module.css'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div className={s.formWrapper}>
                <div className={s.textareaWrapper}>
                    <Field className={s.textarea}
                           component={Textarea}
                           validate={maxLength100}
                           name='newMessageBody'
                           placeholder='Enter your message'
                    />
                </div>
                <div className={s.buttonWrapper}>
                    <button className={s.button}>Отправить</button>
                </div>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
