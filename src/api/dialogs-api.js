import {instance} from './api'

export const dialogsAPI = {
    async getDialogs() {
        const response = await instance.get(`dialogs/`)
        return response
        // [
        // {
        //     "id": 1570,
        //     "userName": "Gaypt1994",
        //     "hasNewMessages": false,
        //     "lastDialogActivityDate": "2019-12-08T08:58:57.967",
        //     "lastUserActivityDate": "2019-12-07T19:12:19.397",
        //     "newMessagesCount": 0,
        //     "photos": {
        //     "small": "https://social-network.samuraijs.com/activecontent/images/users/1570/user-small.jpg?v=1",
        //         "large": "https://social-network.samuraijs.com/activecontent/images/users/1570/user.jpg?v=1"
        // }
        // }
        // ]
    },
    async initialDialog(userId) {
        const response = await instance.put(`dialogs/${userId}`)
        return response
        //{
        //     "data": {},
        //     "messages": [],
        //     "resultCode": 0
        // }
    },

    async getMessage(userId) {
        const response = await instance.get(`dialogs/${userId}/messages`)
        console.log('items list', response.data.items)
        return response.data.items
    },
    // async _sendMessage(userId = 1570) {
    //     const response = await instance.post(`dialogs/${userId}/messages`,
    //         {
    //             body: 'Hello'
    //     })
    //     if (response.resultCode === 0) {
    //         let messages = await dialogsAPI.getMessage(userId)
    //         return messages.message
    //     }
    // },

}
