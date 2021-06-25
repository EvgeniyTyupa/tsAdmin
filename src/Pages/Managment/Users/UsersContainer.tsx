import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../Redux/Managment/Users/usersReducer'
import { ManagmentUser } from '../../../Redux/Managment/Users/usersTypes'
import { AppStateType } from '../../../Redux/reduxStore'
import Users from './Users'

interface UsersContainerProps {
    getUsers: (limit: number, current: number, sorter: string, search: string | null, searchKey: string | null) => void
    users: ManagmentUser[]
    total: number
}

const UsersContainer = ({ getUsers, users, total }: UsersContainerProps) => {
    const [limit, setLimit] = useState<number>(50)
    const [current, setCurrent] = useState<number>(1)
    const [sorter, setSorter] = useState<string>("name asc")
    const [search, setSearch] = useState<string | null>(null)
    const [searchKey, setSearchKey] = useState<string | null>(null)
    
    
    useEffect(() => {
        getUsers(limit, current, sorter, search, searchKey)
    }, [])

    return(
        <Users 
            users={users}
            total={total}
        />
    )
}

let mapStateToProps = (state: AppStateType) => ({
    users: state.users.users,
    total: state.users.total
})

export default connect(mapStateToProps, {
    getUsers
})(UsersContainer)