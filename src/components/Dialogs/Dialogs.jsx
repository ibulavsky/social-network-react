import React, {useState, useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./Message/SendForm"
import Preloader from "../common/Preloader/Preloader"
import {useDispatch, useSelector} from "react-redux"
import {getDialogs} from "../../redux/dialogs/dialogs-thunks"

const Dialogs = ({dialogsPage, ...props}) => {
    const [isMessagesWindow, activatingMessagesWindow] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDialogs())
    }, [])

    const dialogsArr = useSelector((state) => state.messagesPage.dialogsData)
    const messagesArr = useSelector((state) => state.messagesPage.messagesData)
    const isDialogsLoading = useSelector((state) => state.messagesPage.isDialogsLoading)
    const isMessagesLoading = useSelector((state) => state.messagesPage.isLoading)

    let dialogsElements = dialogsArr.map((dialog) => <DialogItem
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

    let messagesElements = messagesArr.map((m) => <Message
            getMessages={props.getMessages}
            activatingMessagesWindow={activatingMessagesWindow}
            message={m.body}
            key={m.id}
            id={m.id}
            companionId={m.recipientId}
            name={m.senderName}
            viewed={m.viewed}
        />
    )

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            {isMessagesWindow
                ? <>
                    {isMessagesLoading
                        ? <Preloader/>
                        : <div className={s.messages}>
                            <button onClick={() => activatingMessagesWindow(false)}>
                                назад
                            </button>
                            <div>{messagesElements}</div>
                            <div>
                                <AddMessageFormRedux onSubmit={addNewMessage}/>
                            </div>
                        </div>
                    }
                </>
                : <> {isDialogsLoading
                    ? <Preloader/>
                    : <div className={s.dialogsItems}>
                        <div>{dialogsElements}</div>
                    </div>
                }
                </>
            }
        </div>
    )
}

export default Dialogs;
