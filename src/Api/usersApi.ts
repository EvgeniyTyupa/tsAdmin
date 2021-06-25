import instance from "./customAxios"

export const usersApi = {
    getUsers(limit: number, current: number, sorter: string, search: string | null, searchKey: string | null){
        return instance.get(`/users?relations=Level`)
        .then(response => response.data)
    },
    getUser(userId: string){
        return instance.get(`/users/${userId}`)
        .then(response => response.data)
    },
    deleteUser(userId: string){
        return instance.delete(`/users/${userId}`)
        .then(response => response.data)
    }
}