import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        //main
        'API-KEY': '7dc52db3-0d14-44ab-80ee-40d908279e0f'

        // emp
        // 'API-KEY': '44e15dfc-6469-4cef-80d5-de74742b85b4'
    },
});

let handler401;

export const setHandler401 = (callback) => {
    handler401 = callback;
}

instance.interceptors.response.use(response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            handler401()
        }
        return Promise.reject(error);
    }
)


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
    uploadPhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo/`, formData, 'multipart/form-data')
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile)
    },
};



