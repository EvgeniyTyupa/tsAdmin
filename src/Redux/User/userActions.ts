import { SET_ACCESS_TOKEN, SET_IS_AUTH, SET_IS_CHECKED_RESET_TOKEN, SET_IS_VALID_RESET_TOKEN, SET_REFRESH_TOKEN, SET_USER_DATA } from "./userConstants";
import { User } from "./userTypes";

export type UserActionTypes = 
    SetAccessTokenActionType | SetRefreshTokenActionType |
    SetIsAuthActionType | SetUserDataActionType |
    SetIsCheckedResetTokenActionType | SetIsValidResetTokenActionType
    
type SetAccessTokenActionType = {
    type: typeof SET_ACCESS_TOKEN,
    accessToken: string | null
}

export const setAccessToken = (accessToken: string | null): SetAccessTokenActionType => ({
    type: SET_ACCESS_TOKEN, accessToken
})

type SetRefreshTokenActionType = {
    type: typeof SET_REFRESH_TOKEN,
    refreshToken: string | null
}

export const setRefreshToken = (refreshToken: string | null): SetRefreshTokenActionType => ({
    type: SET_REFRESH_TOKEN, refreshToken
})

type SetIsAuthActionType = {
    type: typeof SET_IS_AUTH,
    isAuth: boolean
}

export const setIsAuth = (isAuth: boolean): SetIsAuthActionType => ({
    type: SET_IS_AUTH, isAuth
})

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    user: User | null
}

export const setUserData = (user: User | null): SetUserDataActionType => ({
    type: SET_USER_DATA, user
})

type SetIsCheckedResetTokenActionType = {
    type: typeof SET_IS_CHECKED_RESET_TOKEN,
    isCheckedResetToken: boolean
}

export const setIsCheckedResetToken = (isCheckedResetToken: boolean): SetIsCheckedResetTokenActionType => ({
    type: SET_IS_CHECKED_RESET_TOKEN, isCheckedResetToken
})

type SetIsValidResetTokenActionType = {
    type: typeof SET_IS_VALID_RESET_TOKEN,
    isValidResetToken: boolean
}

export const setIsValidResetToken = (isValidResetToken: boolean): SetIsValidResetTokenActionType => ({
    type: SET_IS_VALID_RESET_TOKEN, isValidResetToken
})