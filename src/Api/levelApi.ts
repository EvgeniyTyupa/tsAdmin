import { LevelFormValues } from "../Components/Level/LevelForm"
import { KEY_CASHBACK, KEY_COLOR, KEY_DISPLAY_START, KEY_NAME, KEY_REAL_START, KEY_UPDATED_AT } from "../Redux/Level/levelConstants"
import { typezeLevel } from "../Utils/typezator/typezator"
import instance from "./customAxios"

export const levelApi = {
    getLevels(limit: number, current: number, sorter: string, search: string | null, searchKey: string | null){
        if(search){
            switch(searchKey){
                case KEY_COLOR: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_COLOR}.equals=${search}`)
                    .then(response => response.data)
                }
                case KEY_NAME: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_NAME}.contains=${search}`)
                    .then(response => response.data)
                }
                case KEY_CASHBACK: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_CASHBACK}.equals=${search}`)
                    .then(response => response.data)
                }
                case KEY_DISPLAY_START: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_DISPLAY_START}.equals=${search}`)
                    .then(response => response.data)
                }
                case KEY_REAL_START: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_REAL_START}.equals=${search}`)
                    .then(response => response.data)
                }
                case KEY_UPDATED_AT: {
                    return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}&${KEY_UPDATED_AT}.between=${search}`)
                    .then(response => response.data)
                }
            }
        }else {
            return instance.get(`/levels?limit=${limit}&current=${current}&sorter=${sorter}`)
            .then(response => response.data)
        }
    },
    getLevel(levelId: string){
        return instance.get(`/levels/${levelId}`)
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
    },
    deleteLevel(levelId: string){
        return instance.delete(`/levels/${levelId}`)
        .then(response => response.data)
    }
}