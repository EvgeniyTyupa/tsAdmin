import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, useParams, withRouter } from 'react-router'
import { ManagmentUser } from '../../../../Redux/Managment/Users/usersTypes'
import { AppStateType } from '../../../../Redux/reduxStore'
import User from './User'

interface UserContainerProps {
    user: ManagmentUser | null
}

const UserContainer = ({ user }: UserContainerProps) => {
    const { userId } = useParams<{userId: string}>()

    useEffect(() => {

    }, [])

    return(
        <User user={user}/>
    )
}


let mapStateToProps = (state: AppStateType) => ({
    user: state.users.currentUser
})

export default connect(mapStateToProps, {
    
})(UserContainer)