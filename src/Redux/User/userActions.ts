import { SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from "./userConstants";

export type UserActionTypes = SetAccessTokenActionType | SetRefreshTokenActionType


type SetAccessTokenActionType = {
    type: typeof SET_ACCESS_TOKEN,
    accessToken: string 
}

export const setAccessToken = (accessToken: string): SetAccessTokenActionType => ({
    type: SET_ACCESS_TOKEN, accessToken
})

type SetRefreshTokenActionType = {
    type: typeof SET_REFRESH_TOKEN,
    refreshToken: string
}

export const setRefreshToken = (refreshToken: string): SetRefreshTokenActionType => ({
    type: SET_REFRESH_TOKEN, refreshToken
})