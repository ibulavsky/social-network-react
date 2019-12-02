import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7dc52db3-0d14-44ab-80ee-40d908279e0f'
    },
    'Content-Type': 'multipart/form-data'
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId) {
        console.warn('Obsoleted method');
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    downloadPhoto(myPhoto) {
        let formData = new FormData();
        formData.append('image', myPhoto);
        return instance.put(`profile/photo/`, formData)
    },
};

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



