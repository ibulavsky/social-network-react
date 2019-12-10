import React, {useState} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./Message/SendForm"

const Dialogs = ({dialogsPage, ...props}) => {
    const [isMessagesWindow, activatingMessagesWindow] = useState(true)

    let dialogsElements = dialogsPage.dialogsData.map((dialog) => <DialogItem
            getMessages={props.getMessages}
            activatingMessagesWindow={activatingMessagesWindow}
            name={dialog.userName}
            id={dialog.id}
            key={dialog.id}
            photo={dialog.photos.small}
            newMessagesCount={dialog.newMessagesCount}
            isNewMessage={dialog.hasNewMessages}
        />
    )

    // "id": "c7e99ff5-f656-4457-a8ee-53f90ede7320",
    //     "body": "Hello",
    //     "translatedBody": null,
    //     "addedAt": "2019-12-08T11:33:47.977",
    //     "senderId": 1567,
    //     "senderName": "ibulavsky",
    //     "recipientId": 1570,
    //     "viewed": false

    let messagesElements = dialogsPage.messagesData.map((m) => <Message
            getMessages={props.getMessages}
            activatingMessagesWindow={activatingMessagesWindow}
            message={m.body}
            key={m.id}
            id={m.id}
            companionId={m.recipientId}
            name={m.senderName}
        />
    )

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            {isMessagesWindow
                ? <div className={s.messages}>
                    <button onClick={() => activatingMessagesWindow(false)}>
                        назад
                    </button>
                    <div>{messagesElements}</div>
                    <div>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                    {/*<button onClick={() => {*/}
                    {/*    props.getMessages(props.companionId)*/}
                    {/*}}>посмотреть*/}
                    {/*</button>*/}
                </div>
                : <div className={s.dialogsItems}>
                    <div>{dialogsElements}</div>
                </div>
            }
        </div>
    )
}

export default Dialogs;
