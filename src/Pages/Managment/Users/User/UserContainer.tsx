import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, useParams, withRouter } from 'react-router'
import { getLevel } from '../../../../Redux/Level/levelReducer'
import { Level } from '../../../../Redux/Level/levelTypes'
import { getUser } from '../../../../Redux/Managment/Users/usersReducer'
import { ManagmentUser } from '../../../../Redux/Managment/Users/usersTypes'
import { AppStateType } from '../../../../Redux/reduxStore'
import User from './User'

interface UserContainerProps {
    user: ManagmentUser | null
    getUser: (userId: string) => void
    getLevel: (levelId: string) => void
}

const UserContainer = ({ user, getUser, getLevel }: UserContainerProps) => {
    const { userId } = useParams<{userId: string}>()

    const [isOpenSendPushModal, setIsOpenSendPushModal] = useState<boolean>(false)

    const handleSendPushModal = () => [
        setIsOpenSendPushModal(!isOpenSendPushModal)
    ]

    useEffect(() => {
        getUser(userId)
    }, [])

    return(
        <User 
            user={user}
            isOpenSendPushModal={isOpenSendPushModal}
            handleSendPushModal={handleSendPushModal}
        />
    )
}


let mapStateToProps = (state: AppStateType) => ({
    user: state.users.currentUser,
})

export default connect(mapStateToProps, {
    getUser, getLevel
})(UserContainer)