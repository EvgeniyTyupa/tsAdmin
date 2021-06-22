import React, { useEffect } from 'react'
import classes from '../Auth.module.css'
import LoginForm from '../../../Components/Common/FormComponents/AuthForm/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { login } from '../../../Redux/User/userReducer'
import { AppStateType } from '../../../Redux/reduxStore'
import Preloader from '../../../Components/Common/Preloader/Preloader'
import { setServerError } from '../../../Redux/Common/commonActions'
import { Redirect } from 'react-router'

import logo from '../../../Assets/Common/logo.png'

interface AuthProps {
    login: (email: string, password: string, remember: boolean) => void
    setServerError: (message: string | null) => void
    isFetching: boolean
    serverError: string | null
    isAuth: boolean
}

const Auth = ({ login, isFetching, serverError, isAuth, setServerError }: AuthProps) => {
    const { t } = useTranslation()

    useEffect(() => {
        return () => setServerError(null)
    }, [])

    return(
        <>
            {isAuth && <Redirect to="/dashboard"/>}
            {isFetching ? <Preloader/> :
            <div className={classes.main}>
                <img src={logo}/>
                <LoginForm login={login} serverError={serverError}/>
            </div>}
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isFetching: state.common.isFetching,
    serverError: state.common.serverError,
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps, {
    login, setServerError
})(Auth)