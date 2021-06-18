import instance from "./customAxios"

export const levelApi = {
    getLevels(limit: number, current: number, sorter: string, search: string | null){
        return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&search=${search}`)
        .then(response => response.data)
    }
}