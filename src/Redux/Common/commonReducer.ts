import { CommonActionTypes } from './commonActions'

let initialState = {
    isFetching: false as boolean
}

export type InitialStateType = typeof initialState

export const commonReducer = (state = initialState, action: CommonActionTypes): InitialStateType => {
    switch(action.type){
        default: 
            return state
    }
}

export default commonReducer