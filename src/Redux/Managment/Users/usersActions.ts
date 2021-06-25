import { Level } from "../../Level/levelTypes";
import { SET_CURRENT_USER, SET_TOTAL_USERS, SET_USERS_DATA } from "./usersConstants";
import { ManagmentUser } from "./usersTypes";

export type UsersActionTypes = 
    SetUsersDataActionType | SetTotalUsersActionType |
    SetCurrentUserActionType 

type SetUsersDataActionType = {
    type: typeof SET_USERS_DATA,
    users: ManagmentUser[]
}

export const setUsersData = (users: ManagmentUser[]): SetUsersDataActionType => ({
    type: SET_USERS_DATA, users
})

type SetTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS,
    total: number
}

export const setTotalUsers = (total: number): SetTotalUsersActionType => ({
    type: SET_TOTAL_USERS, total
})

type SetCurrentUserActionType = {
    type: typeof SET_CURRENT_USER,
    user: ManagmentUser | null
}

export const setCurrentUser = (user: ManagmentUser | null): SetCurrentUserActionType => ({
    type: SET_CURRENT_USER, user
})
