import { LevelFormValues } from "../Components/Level/LevelForm"
import { typezeLevel } from "../Utils/typezator/typezator"
import instance from "./customAxios"

export const levelApi = {
    getLevels(limit: number, current: number, sorter: string, search: string | null){
        return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&search=${search}`)
        .then(response => response.data)
    },
    addLevel(data: LevelFormValues){
        let level = typezeLevel(data)

        return instance.post(`/levels`, level)
        .then(response => response.data)
    },
    editLevel(data: LevelFormValues, levelId: string){
        let level = typezeLevel(data)

        return instance.put(`/levels/${levelId}`, level)
        .then(response => response.data)
    }
}