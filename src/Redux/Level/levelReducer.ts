import { ThunkAction } from "redux-thunk";
import { levelApi } from "../../Api/levelApi";
import { CommonActionTypes, setIsFetching } from "../Common/commonActions";
import { AppStateType } from "../reduxStore";
import { LevelActionTypes, setLevelsData, setLevelsTotal } from "./levelActions";
import { SET_LEVELS_DATA, SET_LEVELS_TOTAL } from "./levelConstants";
import { Level } from "./levelTypes";

let ininitalState = {
    levels: [] as Level[],
    total: 0 as number
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
        default: 
            return state
    }
} 

export const getLevels = (limit: number, current: number, sorter: string, search: string | null): ThunkAction<Promise<void>, AppStateType, undefined, LevelActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await levelApi.getLevels(limit, current, sorter, search)

        //@ts-ignore
        dispatch([setLevelsData(response.data), setLevelsTotal(response._meta.total), setIsFetching(false)])
    }catch(err){
        dispatch(setIsFetching(false))
    }
} 

export default levelReducer