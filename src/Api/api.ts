import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://135.125.218.154:9993/api/v1'
})

export const authApi = {
    login(email: string, password: string){
        return instance.post('/auth/login', { email, password })
        .then(response => response.data)
    }
}