import axios from 'axios'
import { refreshToken } from '../Redux/User/userReducer'
import { deleteCookie, getCookie } from '../Utils/cookie/cookie'

const instance = axios.create({
    baseURL: 'http://135.125.218.154:9993/api/v1'
})

export function interceptor(store: any) {
    instance.interceptors.request.use((config) => {

        let cookieToken = getCookie('access_token')

        let token = store.getState().user.accessToken

        config.headers['Authorization'] = `Bearer ` + cookieToken || token
        return config
    })
    
    instance.interceptors.response.use((response) => {
        return response
    }, function(error){
        let token = store.getState().user.accessToken
        const originalRequest = error.config
        if(error.response.status === 403 && !originalRequest._retry){
            originalRequest._retry = true
            if(token){
                refreshToken(token)
                token = store.getState().user.accessToken
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            }
        }
        deleteCookie('access_token')
        return Promise.reject(error)
    })
}


export default instance