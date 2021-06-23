import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setServerError, setServerMessage } from '../../Redux/Common/commonActions'
import { changePassword, updateProfile } from '../../Redux/User/userReducer'
import { AppStateType } from '../../Redux/reduxStore'
import { User } from '../../Redux/User/userTypes'
import Profile from './Profile'
import { setUserData } from '../../Redux/User/userActions'

interface Props {
    user: User | null
    changePassword: (current_password: string, new_password: string, confirm_password: string) => void
    updateProfile: (email: string, first_name: string, last_name: string, phone: string, mobile: string) => void
    serverError: string | null
    serverMessage: string | null
    setServerError: (message: string | null) => void
    setServerMessage: (message: string | null) => void
    setUserData: (user: User | null) => void
}

const ProfileContainer = ({ user, setUserData, changePassword, updateProfile, setServerError, setServerMessage, serverMessage, serverError }: Props) => {
    
    useEffect(() => {
        return () => {
            setServerError(null)
            setServerMessage(null)
        }
    }, [])
    
    const [isOpenChangePassModal, setIsOpenChangePassModal] = useState<boolean>(false)

    const handleChangePassModal = () => {
        setIsOpenChangePassModal(!isOpenChangePassModal)
    }

    const handleUpdateProfile = (email: string, first_name: string, last_name: string, phone: string, mobile: string) => {
        updateProfile(email, first_name, last_name, phone, mobile)

        const newUser = {
            ...user,
            email: email,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            mobile: mobile
        }
        setUserData(newUser)
    }

    return(
        <Profile 
            user={user} 
            handleChangePassModal={handleChangePassModal}
            isOpenChangePassModal={isOpenChangePassModal}
            changePassword={changePassword}
            updateProfile={handleUpdateProfile}
            serverError={serverError}
            serverMessage={serverMessage}
            setServerError={setServerError}
            setServerMessage={setServerMessage}
        />
    )
}

let mapStateToProps = (state: AppStateType) => ({
    user: state.user.user,
    serverError: state.common.serverError,
    serverMessage: state.common.serverMessage
})

export default connect(mapStateToProps, {
    setServerError, 
    setServerMessage, 
    changePassword, 
    updateProfile, 
    setUserData
})(ProfileContainer)