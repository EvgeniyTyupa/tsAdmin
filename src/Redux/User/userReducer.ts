import { ThunkAction } from "redux-thunk"
import { authApi } from "../../Api/authApi"
import { deleteCookie, setCookie } from "../../Utils/cookie/cookie"
import { CommonActionTypes, setIsFetching, setServerError, setServerMessage } from "../Common/commonActions"
import { AppStateType } from "../reduxStore"
import { setAccessToken, setIsAuth, setIsCheckedResetToken, setIsValidResetToken, setRefreshToken, setUserData, UserActionTypes } from "./userActions"
import { SET_ACCESS_TOKEN, SET_IS_AUTH, SET_IS_CHECKED_RESET_TOKEN, SET_IS_VALID_RESET_TOKEN, SET_REFRESH_TOKEN, SET_USER_DATA } from "./userConstants"
import { User } from "./userTypes"


let initialState = {
    accessToken: null as string | null,
    refreshToken: null as string | null,
    isAuth: false as boolean,
    user: null as User | null,
    isCheckedResetToken: false as boolean,
    isValidResetToken: false as boolean 
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
        case SET_IS_CHECKED_RESET_TOKEN: {
            return { ...state, isCheckedResetToken: action.isCheckedResetToken }
        }
        case SET_IS_VALID_RESET_TOKEN: {
            return { ...state, isValidResetToken: action.isValidResetToken }
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

export const forgot = (email: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.forgot(email)
        //@ts-ignore
        dispatch([setServerError(null), setServerMessage(response.message), setIsFetching(false)])
    }catch(err){
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        dispatch(setIsFetching(false))
    }
}

export const checkResetToken = (reset_token: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.checkResetToken(reset_token)
        console.log(response)
        
        //@ts-ignore
        dispatch([setIsValidResetToken(true), setIsFetching(false)])
    }catch(err){
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        //@ts-ignore
        dispatch([setIsValidResetToken(false), setIsFetching(false)])
    }finally{
        dispatch(setIsCheckedResetToken(true))
    }
}

export const resetPassword = (new_password: string, confirm_password: string, reset_token: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{   
        let response = await authApi.resetPassword(new_password, confirm_password, reset_token)
        //@ts-ignore
        dispatch([setServerError(null), setServerMessage(response.message), setIsFetching(false)])
    }catch(err){
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        dispatch(setIsFetching(false))
    }
}

export const changePassword = (current_password: string, new_password: string, confirm_password: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.changePassword(current_password, new_password, confirm_password)

        //@ts-ignore
        dispatch([setServerError(null), setServerMessage(response.message), setIsFetching(false)])
    }catch(err){
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        dispatch(setIsFetching(false))
    }
}

export const updateProfile = (email: string, first_name: string, last_name: string, phone: string, mobile: string): ThunkAction<Promise<void>, AppStateType, undefined, UserActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await authApi.updateProfile(email, first_name, last_name, phone, mobile)

        //@ts-ignore
        dispatch([setServerError(null), setServerMessage(response.message), setIsFetching(false)])
    }catch(err){
        if(err.response){
            dispatch(setServerError(err.response.data.error))
        }
        dispatch(setIsFetching(false))
    }
}

export default userReducer