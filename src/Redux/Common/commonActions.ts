import { SET_IS_FETCHING, SET_SERVER_ERROR, SET_SERVER_MESSAGE } from "./commonConstants";

export type CommonActionTypes = 
    SetIsFetchingActionType | SetServerErrorActionType |
    SetServerMessageActionType

type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING,
    isFetching: boolean
}

export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_IS_FETCHING, isFetching
})

type SetServerErrorActionType = {
    type: typeof SET_SERVER_ERROR,
    serverError: string | null
}

export const setServerError = (serverError: string | null): SetServerErrorActionType => ({
    type: SET_SERVER_ERROR, serverError
})

type SetServerMessageActionType = {
    type: typeof SET_SERVER_MESSAGE,
    serverMessage: string | null
}

export const setServerMessage = (serverMessage: string | null): SetServerMessageActionType => ({
    type: SET_SERVER_MESSAGE, serverMessage
})