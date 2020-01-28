import React, {useState, useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect, useParams, NavLink} from "react-router-dom";
import {AddMessageFormRedux} from "./Message/SendForm"
import Preloader from "../common/Preloader/Preloader"
import {useDispatch, useSelector} from "react-redux"
import {deleteMessage, getDialogs, sendMessage} from "../../redux/dialogs/dialogs-thunks"
import {DIALOGS_PATH, LOG_IN_PATH} from "../Main/Routes"

const Dialogs = ({dialogsPage, ...props}) => {

    const {userId} = useParams()

    const [isMessagesWindow, activatingMessagesWindow] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDialogs())
    }, [])


    useEffect(() => {
        refreshDialogs()
    }, [userId])

    const refreshDialogs = () => {
        if (userId) {
            props.getMessages(userId);
            activatingMessagesWindow(true)
        } else {
            activatingMessagesWindow(false)
            dispatch(getDialogs())
        }
    }

    //data
    const dialogsArr = useSelector((state) => state.messagesPage.dialogsData)
    const messagesArr = useSelector((state) => state.messagesPage.messagesData)
    const currentInterlocutorId = useSelector((state) => state.messagesPage.currentInterlocutorId)
    const isDialogsLoading = useSelector((state) => state.messagesPage.isDialogsLoading)
    const isMessagesLoading = useSelector((state) => state.messagesPage.isLoading)

    //methods
    const addNewMessage = (values) => {
        dispatch(sendMessage(currentInterlocutorId, values.newMessageBody))
    }

    const onDeleteMessage = (id) => {
        dispatch(deleteMessage(id, currentInterlocutorId))
    }

    let dialogsElements = dialogsArr.map((dialog) => <DialogItem
            activatingMessagesWindow={activatingMessagesWindow}
            name={dialog.userName}
            id={dialog.id}
            key={dialog.id}
            photo={dialog.photos.small}
            newMessagesCount={dialog.newMessagesCount}
            isNewMessage={dialog.hasNewMessages}
        />
    )

    let messagesElements = messagesArr.map((m) => <Message
            getMessages={props.getMessages}
            deleteMessage={onDeleteMessage}
            activatingMessagesWindow={activatingMessagesWindow}
            message={m.body}
            key={m.id}
            id={m.id}
            companionId={m.recipientId}
            name={m.senderName}
            viewed={m.viewed}
        />
    )

    if (!props.isAuth) return <Redirect to={LOG_IN_PATH}/>;

    return (
        <div className={s.dialogs}>
            {isMessagesWindow
                ? <>
                    {isMessagesLoading
                        ? <Preloader/>
                        : <div className={s.messages}>
                            <NavLink to={DIALOGS_PATH}>
                                <button>back</button>
                            </NavLink>
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
