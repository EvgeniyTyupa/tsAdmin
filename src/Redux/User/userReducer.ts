import { ThunkAction } from "redux-thunk"
import { authApi } from "../../Api/api"
import { deleteCookie, setCookie } from "../../Utils/cookie/cookie"
import { CommonActionTypes, setIsFetching, setServerError } from "../Common/commonActions"
import { AppStateType } from "../reduxStore"
import { setAccessToken, setIsAuth, setRefreshToken, setUserData, UserActionTypes } from "./userActions"
import { SET_ACCESS_TOKEN, SET_IS_AUTH, SET_REFRESH_TOKEN, SET_USER_DATA } from "./userConstants"
import { User } from "./userTypes"


let initialState = {
    accessToken: null as string | null,
    refreshToken: null as string | null,
    isAuth: false as boolean,
    user: null as User | null
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
        case SET_IS_AUTH: {
            return { ...state, isAuth: action.isAuth }
        }
        case SET_USER_DATA: {
            return { ...state, user: action.user }
        }
        default:
            return state
    }
}

export const login = (email: string, password: string, remember: boolean): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.login(email, password)

        let cookieLife = 21600 // 6 hours

        if(remember){
            setCookie('access_token', response.access_token, { secure: true, 'max-age': cookieLife })
        }

        //@ts-ignore
        dispatch([
            setAccessToken(response.access_token),
            setRefreshToken(response.refresh_token), 
            setIsAuth(true),
            setIsFetching(false)
        ])
    }catch(err){
        //@ts-ignore
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        dispatch(setIsFetching(false))
    }
}

export const refreshToken = (refreshToken: string | null): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.refreshToken(refreshToken)
        
        //@ts-ignore
        dispatch([
            setAccessToken(response.access_token),
            setRefreshToken(response.refresh_token),
            setIsFetching(false)
        ])
    }catch(err){
        //@ts-ignore
        dispatch([setIsAuth(false), setIsFetching(false)])
    }
}

export const me = (): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.me()

        //@ts-ignore
        dispatch([setUserData(response), setIsAuth(true), setIsFetching(false)])
    }catch(err){
        //@ts-ignore
        dispatch([setIsAuth(false), setIsFetching(false)])
    }
}

export const logout = (): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        await authApi.logout()
        
        deleteCookie('access_token')

        //@ts-ignore
        dispatch([
            setIsAuth(false),
            setRefreshToken(null), 
            setAccessToken(null), 
            setUserData(null), 
            setIsFetching(false)
        ])

    }catch(err){
        dispatch(setIsFetching(false))
    }
}

export default userReducer