import { SET_IS_FETCHING, SET_SERVER_ERROR } from "./commonConstants";

export type CommonActionTypes = SetIsFetchingActionType | SetServerErrorActionType

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