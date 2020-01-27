import {instance} from './api'

export const dialogsAPI = {
    async getDialogs() {
        const response = await instance.get(`dialogs/`)
        return response.data
    },
    async startDialog(userId) {
        const response = await instance.put(`dialogs/${userId}`)
        return response.data
    },
    async getMessage(userId) {
        const response = await instance.get(`dialogs/${userId}/messages`)
        return response.data.items
    },
    async sendMessage(userId, message) {
        const response = await instance.post(`dialogs/${userId}/messages`, {body: message})
        return response.data
    },
    async deleteMessage(id) {
        const response = await instance.delete(`dialogs/messages/${id}`)
        return response.data
    },
}
