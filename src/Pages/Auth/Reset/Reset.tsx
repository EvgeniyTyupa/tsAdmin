import React, { useEffect } from 'react'
import classes from '../Auth.module.css'
import { connect } from 'react-redux'
import ResetPasswordForm from '../../../Components/Common/FormComponents/AuthForm/ResetPasswordForm/ResetPasswordForm'
import { withRouter, RouteComponentProps, Redirect } from 'react-router'
import { AppStateType } from '../../../Redux/reduxStore'
import { checkResetToken, resetPassword } from '../../../Redux/User/userReducer'
import { useTranslation } from 'react-i18next'
import Preloader from '../../../Components/Common/Preloader/Preloader'
import { setServerError } from '../../../Redux/Common/commonActions'

interface MatchParams {
    token: string
}

interface ResetProps extends RouteComponentProps<MatchParams>{
    checkResetToken: (reset_token: string) => void
    setServerError: (message: string | null) => void
    resetPassword: (new_password: string, confirm_password: string, reset_token: string) => void
    isFetching: boolean
    serverError: string | null
    serverMessage: string | null
    isCheckedResetToken: boolean
    isValidResetToken: boolean
}

const Reset = ({ match, checkResetToken, setServerError, resetPassword, isFetching, serverError, isCheckedResetToken, isValidResetToken, serverMessage }: ResetProps) => {
    let reset_token = match.params.token 

    useEffect(() => {
       checkResetToken(reset_token)

       return () => setServerError(null)
    }, [])   

    const { t } = useTranslation()

    return(
        <>
            {(!isCheckedResetToken || isFetching) ? <Preloader/> :
            <>
                {!isValidResetToken ? <Redirect to="/auth/login"/> :
                <div className={classes.main}>  
                    <h2>{t("auth.resetPage.title")}</h2>
                    <ResetPasswordForm serverError={serverError} resetPassword={resetPassword} reset_token={reset_token} serverMessage={serverMessage}/>
                </div>}
            </>
            }
        </>
       
    )
}

let WithUrlDataContainerComponent = withRouter(Reset)

let mapStateToProps = (state: AppStateType) => ({
    isFetching: state.common.isFetching,
    serverError: state.common.serverError,
    serverMessage: state.common.serverMessage,
    isCheckedResetToken: state.user.isCheckedResetToken,
    isValidResetToken: state.user.isValidResetToken
})

export default connect(mapStateToProps, {
    checkResetToken, setServerError, resetPassword
})(WithUrlDataContainerComponent)