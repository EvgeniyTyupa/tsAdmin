import React from 'react'
import classes from './Auth.module.css'
import AuthForm from '../../Components/Common/FormComponents/AuthForm/AuthForm'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { login } from '../../Redux/User/userReducer'
import { AppStateType } from '../../Redux/reduxStore'

interface AuthProps {
    login: (email: string, password: string) => void
}

const Auth = ({ login }: AuthProps) => {
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <h2>{t("auth.title")}</h2>
            <AuthForm login={login}/>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    login
})(Auth)