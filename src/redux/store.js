import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'My Post', likesCount: 1},
                {id: 2, message: 'My Post 2', likesCount: 3},
                {id: 3, message: "Hello World! What's up?", likesCount: 25},

            ],
            newPostText: '',
            profileData: {
                name: "Igor Bulavsky", age: 25,
                filmsList: "Avatar",
                musicList: "Hip-hop"
            }
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hey!'},
                {id: 3, message: 'What Up'},
                {id: 4, message: 'Goose'},
                {id: 5, message: 'Alex'},
            ],

            newMessageBody: '',

            dialogsData: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Jammal'},
                {id: 3, name: 'Angeline'},
                {id: 4, name: 'Goose'},
                {id: 5, name: 'Alex'},
            ],

        },
        sidebar: {
            friendsName: [
                {name: "Victor", id: 1},
                {name: "Vadim", id: 2},
                {name: "Max", id: 3}
            ]
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};




export default store
window.store = store;
