import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

class Dialogs extends Component {
    render() {
        let state = this.props.messagesPage;

        let dialogsElements = state.dialogsData.map((users) => <DialogItem
                name={users.name}
                id={users.id}
                key={users.id}
            />
        );

        let messagesElements = state.messagesData.map((m) => <Message
                message={m.message}
                key={m.id}
            />
        );

        let addNewMessage = (values) => {
            this.props.sendMessage(values.newMessageBody)
        };

        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div>{dialogsElements}</div>
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        )
    }
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Запостить</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;
