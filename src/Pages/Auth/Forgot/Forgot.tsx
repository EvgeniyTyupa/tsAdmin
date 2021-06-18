import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import ForgotForm from '../../../Components/Common/FormComponents/AuthForm/ForgotForm/ForgotForm'
import Preloader from '../../../Components/Common/Preloader/Preloader'
import { setServerError, setServerMessage } from '../../../Redux/Common/commonActions'
import { AppStateType } from '../../../Redux/reduxStore'
import { forgot } from '../../../Redux/User/userReducer'
import classes from '../Auth.module.css'

interface ForgotProps {
    forgot: (email: string) => void
    setServerError: (message: string | null) => void
    setServerMessage: (message: string | null) => void
    isFetching: boolean
    serverError: string | null
    serverMessage: string | null
}

const Forgot = ({ forgot, setServerError, setServerMessage, isFetching, serverError, serverMessage }: ForgotProps) => {

    useEffect(() => {
        return () => {
            setServerError(null)
            setServerMessage(null)
        }
    }, [])

    const { t } = useTranslation()
    return(
        <>
            {isFetching && <Preloader/>}
            <div className={classes.main}>
                <h2>{t("auth.forgotPage.title")}</h2>
                <ForgotForm forgot={forgot} serverError={serverError} serverMessage={serverMessage}/>
            </div>
        </>
        
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isFetching: state.common.isFetching,
    serverError: state.common.serverError,
    serverMessage: state.common.serverMessage
})

export default connect(mapStateToProps, {
    forgot, setServerError, setServerMessage
})(Forgot)