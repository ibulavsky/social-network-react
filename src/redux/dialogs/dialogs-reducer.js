export const SEND_MESSAGE = 'SOCIAL-NETWORK/DIALOGS-REDUCER/SEND-MESSAGE';
export const SET_MESSAGES = 'SOCIAL-NETWORK/DIALOGS-REDUCER/SET-MESSAGES';
export const IS_MESSAGES_LOADING = 'SOCIAL-NETWORK/DIALOGS-REDUCER/IS_MESSAGES_LOADING';
export const IS_DIALOGS_LOADING = 'SOCIAL-NETWORK/DIALOGS-REDUCER/IS_DIALOGS_LOADING';
export const SET_DIALOGS = 'SOCIAL-NETWORK/DIALOGS-REDUCER/SET_DIALOGS';
export const START_DIALOG = 'SOCIAL-NETWORK/DIALOGS-REDUCER/START_DIALOG';


const initialState = {
    messagesData: [
        //отправка
        // {
        //     "data": {
        //         "message": {
        //             "id": "c7e99ff5-f656-4457-a8ee-53f90ede7320",
        //             "body": "Hello",
        //             "translatedBody": null,
        //             "addedAt": "2019-12-08T11:33:47.977",
        //             "senderId": 1567,
        //             "senderName": "ibulavsky",
        //             "recipientId": 1570,
        //             "recipientName": "Gaypt1994",
        //             "viewed": false,
        //             "deletedBySender": false,
        //             "deletedByRecipient": false,
        //             "isSpam": false,
        //             "distributionId": null
        //         }
        //     }, "messages": [], "resultCode": 0
        // },
        {
            "id": "c7e99ff5-f656-4457-a8ee-53f90ede7320",
            "body": "Hello",
            "translatedBody": null,
            "addedAt": "2019-12-08T11:33:47.977",
            "senderId": 1567,
            "senderName": "ibulavsky",
            "recipientId": 1570,
            "viewed": false
        },
    ],

    dialogsData: [
        {
            "id": 1570,
            "userName": "Gaypt1994",
            "hasNewMessages": true,
            "lastDialogActivityDate": "2019-12-08T08:58:57.967",
            "lastUserActivityDate": "2019-12-07T19:12:19.397",
            "newMessagesCount": 5,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/1570/user-small.jpg?v=1",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/1570/user.jpg?v=1"
            }
        },
        {
            "id": 1570,
            "userName": "Gaypt1994",
            "hasNewMessages": true,
            "lastDialogActivityDate": "2019-12-08T08:58:57.967",
            "lastUserActivityDate": "2019-12-07T19:12:19.397",
            "newMessagesCount": 5,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/1570/user-small.jpg?v=1",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/1570/user.jpg?v=1"
            }
        },
    ],
    isDialogsLoading: false,
    isLoading: false,
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_DIALOGS_LOADING:
            return {
                ...state,
                isDialogsLoading: action.isLoading
            };
        case SET_DIALOGS:
            return {
                ...state,
                dialogsData: action.dialogsList,
            };
        case IS_MESSAGES_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };
        case SET_MESSAGES:
            return {
                ...state,
                messagesData: action.messagesList,
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});
export const setMessages = (messagesList) => ({type: SET_MESSAGES, messagesList});
export const setLoadingMessages = (isLoading) => ({type: IS_MESSAGES_LOADING, isLoading});
export const isLoadingDialogs = (isLoading) => ({type: IS_DIALOGS_LOADING, isLoading});
export const setDialogs = (dialogsList) => ({type: SET_DIALOGS, dialogsList});
