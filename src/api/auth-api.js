import {instance} from './api'

export const authAPI = {
    async me() {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

export const securityAPI = {
    async getCaptchaUrl() {
        return await instance.get(`security/get-captcha-url`)
    },
};
