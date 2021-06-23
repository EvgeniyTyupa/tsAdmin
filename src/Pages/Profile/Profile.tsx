import React from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumb, { BreadcrumbPath } from '../../Components/Layout/Breadcrumb/Breadcrumb'
import Layout from '../../Components/Layout/Layout'
import ChangePasswordModal from '../../Components/Profile/ChangePasswordModal/ChangePasswordModal'
import ProfileForm from '../../Components/Profile/ProfileForm/ProfileForm'
import { User } from '../../Redux/User/userTypes'
import classes from './Profile.module.css'

interface ProfileProps {
    user: User | null
    handleChangePassModal: () => void
    isOpenChangePassModal: boolean
    serverError: string | null
    serverMessage: string | null
    setServerError: (message: string | null) => void
    setServerMessage: (message: string | null) => void
    changePassword: (current_password: string, new_password: string, confirm_password: string) => void
    updateProfile: (email: string, first_name: string, last_name: string, phone: string, mobile: string) => void
}

const Profile = ({ user, handleChangePassModal, serverError, serverMessage, isOpenChangePassModal, changePassword, updateProfile, setServerError, setServerMessage }: ProfileProps) => {
    const { t } = useTranslation()

    const routes: BreadcrumbPath[] = [
        {
            title: t("menu.profile"),
            path: "/profile"
        }
    ]

    return(
        <Layout>
            <div className={classes.main}>
                <Breadcrumb routes={routes}/>
                <div className={classes.body}>
                    <div className={classes.header}>
                        <h3>{routes[0].title}</h3>
                    </div>
                    {isOpenChangePassModal && 
                        <ChangePasswordModal 
                            handleChangePassModal={handleChangePassModal} 
                            changePassword={changePassword}
                            serverError={serverError}
                            serverMessage={serverMessage}
                            setServerError={setServerError}
                            setServerMessage={setServerMessage}
                        />}
                    <ProfileForm 
                        user={user} 
                        handleChangePassModal={handleChangePassModal} 
                        updateProfile={updateProfile}
                        serverError={serverError}
                        serverMessage={serverMessage}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Profile