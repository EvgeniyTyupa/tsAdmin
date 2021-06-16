import { ThunkAction } from "redux-thunk"
import { authApi } from "../../Api/api"
import { CommonActionTypes, setIsFetching } from "../Common/commonActions"
import { AppStateType } from "../reduxStore"
import { setAccessToken, UserActionTypes } from "./userActions"
import { SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from "./userConstants"


let initialState = {
    accessToken: null as string | null,
    refreshToken: null as string | null
}

export type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: UserActionTypes): InitialStateType => {
    switch(action.type){
        case SET_ACCESS_TOKEN: {
            return { ...state, accessToken: action.accessToken }
        }
        case SET_REFRESH_TOKEN: {
            return { ...state, refreshToken: action.refreshToken }
        }
        default:
            return state
    }
}

export const login = (email: string, password: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.login(email, password)
        console.log(response)
        dispatch(setIsFetching(false))
    }catch(err){
        dispatch(setIsFetching(false))
    }
}

export default userReducer