import { CommonActionTypes } from './commonActions'
import { SET_IS_FETCHING, SET_SERVER_ERROR, SET_SERVER_MESSAGE } from './commonConstants'

let initialState = {
    isFetching: false as boolean,
    serverError: null as null | string,
    serverMessage: null as null | string
}

export type InitialStateType = typeof initialState

export const commonReducer = (state = initialState, action: CommonActionTypes): InitialStateType => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_SERVER_ERROR: {
            return { ...state, serverError: action.serverError }
        }
        case SET_SERVER_MESSAGE: {
            return { ...state, serverMessage: action.serverMessage }
        }
        default: 
            return state
    }
}


export default commonReducer