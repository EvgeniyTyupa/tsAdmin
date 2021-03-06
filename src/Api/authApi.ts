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
    },
    forgot(email: string){
        return instance.post('/auth/forgot', { email })
        .then(response => response.data)
    },
    checkResetToken(reset_token: string){
        return instance.get(`/auth/reset/${reset_token}`)
        .then(response => response.data)
    },
    resetPassword(new_password: string, confirm_password: string, reset_token: string){
        return instance.post(`/auth/reset/${reset_token}`, { new_password, confirm_password })
        .then(response => response.data)
    },
    changePassword(current_password: string, new_password: string, confirm_password: string){
        return instance.put(`/profile/password`, { current_password, new_password, confirm_password })
        .then(response => response.data)
    },
    updateProfile(email: string, first_name: string, last_name: string, phone: string, mobile: string){
        return instance.put(`/profile`, { email, first_name, last_name, phone, mobile })
        .then(response => response.data)
    }
}
