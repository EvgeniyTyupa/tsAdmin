import { ThunkAction } from "redux-thunk";
import { levelApi } from "../../Api/levelApi";
import { LevelFormValues } from "../../Components/Level/LevelForm";
import { CommonActionTypes, setIsFetching } from "../Common/commonActions";
import { AppStateType } from "../reduxStore";
import { LevelActionTypes, setCurrentLevel, setLevelsData, setLevelsTotal } from "./levelActions";
import { SET_CURRENT_LEVEL, SET_LEVELS_DATA, SET_LEVELS_TOTAL } from "./levelConstants";
import { Level } from "./levelTypes";

let ininitalState = {
    levels: [] as Level[],
    total: 0 as number,
    currentLevel: null as Level | null
}

export type InitialStateType = typeof ininitalState

const levelReducer = (state = ininitalState, action: LevelActionTypes): InitialStateType => {
    switch(action.type){
        case SET_LEVELS_DATA: {
            return { ...state, levels: action.levels }
        }
        case SET_LEVELS_TOTAL: {
            return { ...state, total: action.total }
        }
        case SET_CURRENT_LEVEL: {
            return { ...state, currentLevel: action.currentLevel }
        }
        default: 
            return state
    }
} 

export const getLevels = (limit: number, current: number, sorter: string, search: string | null, searchKey: string | null): ThunkAction<Promise<void>, AppStateType, undefined, LevelActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await levelApi.getLevels(limit, current, sorter, search, searchKey)

        //@ts-ignore
        dispatch([setLevelsData(response.data), setLevelsTotal(response._meta.total), setIsFetching(false)])
    }catch(err){
        dispatch(setIsFetching(false))
    }
} 

export const addLevel = (data: LevelFormValues): ThunkAction<Promise<void>, AppStateType, undefined, LevelActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await levelApi.addLevel(data)

        //@ts-ignore
        dispatch([setIsFetching(false)])
    }catch(err){    
        dispatch(setIsFetching(false))
    }
}

export const editLevel = (data: LevelFormValues, levelId?: string): ThunkAction<Promise<void>, AppStateType, undefined, LevelActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    if(levelId){
        try{
            let response = await levelApi.editLevel(data, levelId)

            //@ts-ignore
            dispatch([setCurrentLevel(response), setIsFetching(false)])
        }catch(err){
            dispatch(setIsFetching(false))
        }
    }   
}

export const deleteLevel = (levelId: string): ThunkAction<Promise<void>, AppStateType, undefined, LevelActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await levelApi.deleteLevel(levelId)
        console.log(response)
        dispatch(setIsFetching(false))
    }catch(err){
        dispatch(setIsFetching(false))
    }
}

export default levelReducer