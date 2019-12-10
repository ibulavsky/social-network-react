import {instance} from './api'

export const authAPI = {
    async me() {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
