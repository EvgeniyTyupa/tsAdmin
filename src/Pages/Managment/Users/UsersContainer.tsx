import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setUsersData } from '../../../Redux/Managment/Users/usersActions'
import { deleteUser, getUsers } from '../../../Redux/Managment/Users/usersReducer'
import { ManagmentUser } from '../../../Redux/Managment/Users/usersTypes'
import { AppStateType } from '../../../Redux/reduxStore'
import Users from './Users'

interface UsersContainerProps {
    getUsers: (limit: number, current: number, sorter: string, search: string | null, searchKey: string | null) => void
    setUsersData: (users: ManagmentUser[]) => void
    deleteUser: (userId: string) => void
    users: ManagmentUser[]
    total: number
}

const UsersContainer = ({ getUsers, setUsersData, deleteUser, users, total }: UsersContainerProps) => {
    const [limit, setLimit] = useState<number>(50)
    const [current, setCurrent] = useState<number>(1)
    const [sorter, setSorter] = useState<string>("name asc")
    const [search, setSearch] = useState<string | null>(null)
    const [searchKey, setSearchKey] = useState<string | null>(null)
    
    const [userToAction, setUserToAction] = useState<ManagmentUser | null>(null)

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

    const handleOpenDeleteModal = (user: ManagmentUser | null) => {
        setUserToAction(user)
        setIsOpenDeleteModal(!isOpenDeleteModal)
    }

    const handleDeleteUser = (userId: string) => {
        deleteUser(userId)

        let changedUsers = [...users]
        changedUsers.forEach((item, index) => {
            if(item.id === userId){
                changedUsers.splice(index, 1)
            }
        })
        setUsersData(changedUsers)
        handleOpenDeleteModal(null)
    }


    useEffect(() => {
        getUsers(limit, current, sorter, search, searchKey)
    }, [])

    return(
        <Users 
            limit={limit}
            users={users}
            total={total}
            handleDeleteUser={handleDeleteUser}
            handleOpenDeleteModal={handleOpenDeleteModal}
            isOpenDeleteModal={isOpenDeleteModal}
            userToAction={userToAction}
        />
    )
}

let mapStateToProps = (state: AppStateType) => ({
    users: state.users.users,
    total: state.users.total
})

export default connect(mapStateToProps, {
    getUsers, setUsersData, deleteUser
})(UsersContainer)