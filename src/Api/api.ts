import instance from "./customAxios"

export const authApi = {
    login(email: string, password: string){
        return instance.post('/auth/login', { email, password })
        .then(response => response.data)
    },
    refreshToken(refresh_token: string | null){
        return instance.post('/auth/refresh', { refresh_token })
        .then(response => response.data)
    },
    me(){
        return instance.get('/auth/account')
        .then(response => response.data)
    },
    logout(){
        return instance.post('/auth/logout')
        .then(response => response.data)
    }
}