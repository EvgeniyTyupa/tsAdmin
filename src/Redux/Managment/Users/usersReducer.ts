import { ThunkAction } from "redux-thunk";
import { usersApi } from "../../../Api/usersApi";
import { CommonActionTypes, setIsFetching } from "../../Common/commonActions";
import { AppStateType } from "../../reduxStore";
import { setCurrentUser, setTotalUsers, setUsersData, UsersActionTypes } from "./usersActions";
import { SET_CURRENT_USER, SET_TOTAL_USERS, SET_USERS_DATA } from "./usersConstants";
import { ManagmentUser } from "./usersTypes";

let initialState = {
    users: [] as ManagmentUser[],
    currentUser: null as ManagmentUser | null,
    total: 0 as number
}

export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: UsersActionTypes) => {
    switch(action.type){
        case SET_USERS_DATA: {
            return { ...state, users: action.users }
        }
        case SET_TOTAL_USERS: {
            return { ...state, total: action.total }
        }
        case SET_CURRENT_USER: {
            return { ...state, user: action.user }
        }
        default: 
            return state
    }
}

export const getUsers = (limit: number, current: number, sorter: string, search: string | null, searchKey: string | null): ThunkAction<Promise<void>, AppStateType, undefined, UsersActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await usersApi.getUsers(limit, current, sorter, search, searchKey)

        //@ts-ignore
        dispatch([setUsersData(response.data), setTotalUsers(response._meta.total), setIsFetching(false)])
    }catch(err){    
        dispatch(setIsFetching(false))
    }
}

export const getUser = (userId: string): ThunkAction<Promise<void>, AppStateType, undefined, UsersActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await usersApi.getUser(userId)

        //@ts-ignore
        dispatch([setCurrentUser(response), setIsFetching(false)])
    }catch(err){
        dispatch(setIsFetching(false))
    }
}
