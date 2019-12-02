export const SEND_MESSAGE = 'SEND-MESSAGE';
const initialState = {
    messagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hey!'},
        {id: 3, message: 'What Up'},
        {id: 4, message: 'Goose'},
        {id: 5, message: 'Alex'},
    ],

    dialogsData: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Jammal'},
        {id: 3, name: 'Angeline'},
        {id: 4, name: 'Goose'},
        {id: 5, name: 'Alex'},
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
                case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export default dialogsReducer;


export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});
