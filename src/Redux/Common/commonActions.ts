import { SET_IS_FETCHING } from "./commonConstants";

export type CommonActionTypes = SetIsFetchingActionType

type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING,
    isFetching: boolean
}

export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_IS_FETCHING, isFetching
})