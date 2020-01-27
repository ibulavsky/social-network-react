import {instance} from './api'

export const dialogsAPI = {
    async getDialogs() {
        const response = await instance.get(`dialogs/`)
        return response.data
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
