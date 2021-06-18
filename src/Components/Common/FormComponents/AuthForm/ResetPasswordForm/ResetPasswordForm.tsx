import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import classes from '../AuthForm.module.css'
import { Button, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import FormError from '../Errors/FormError/FormError';
import { cx } from '../../../../../Utils/classnames';
import { NavLink } from 'react-router-dom';

interface ResetPasswordFormProps {
    serverError: string | null
    resetPassword: (new_password: string, confirm_password: string, reset_token: string) => void
    reset_token: string
    serverMessage: string | null
}

interface FormValues {
    new_password: string,
    confirm_password: string
}

const ResetPasswordForm = ({ serverError, serverMessage, resetPassword, reset_token }: ResetPasswordFormProps) => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>()

    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        resetPassword(data.new_password, data.confirm_password, reset_token)
        reset({
            new_password: "",
            confirm_password: ""
        })
    }

    return(
        <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.main}>
            <div className={classes.field}>
                <Controller
                    control={control}
                    name="new_password"
                    rules={{ required: t<string>("errors.required") }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <>
                            <Input
                                type="password"
                                className={classes.input}
                                size="large"
                                placeholder={t("auth.resetPage.newPass")}
                                prefix={<FontAwesomeIcon icon={faLock}/>}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            {errors.new_password && errors.new_password.type === 'required' && (
                                <FormError message={errors.new_password.message}/>
                            )}
                        </>
                    )}
                />
            </div>
            <div className={classes.field}>
                <Controller
                    control={control}
                    name="confirm_password"
                    rules={{ required: t<string>("errors.required") }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <>
                            <Input
                                type="password"
                                className={classes.input}
                                size="large"
                                placeholder={t("auth.resetPage.confirmPass")}
                                prefix={<FontAwesomeIcon icon={faLock}/>}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            {errors.new_password && errors.new_password.type === 'required' && (
                                <FormError message={errors.new_password.message}/>
                            )}
                        </>
                    )}
                />
            </div>
            {serverError && <FormError className={classes.serverError} message={serverError}/>}
            {serverMessage && <p>{serverMessage}</p>}
            <Button type="primary" htmlType="submit">{t("auth.submit")}</Button>
            <div className={cx(classes.field, classes.forgot)}>
                <NavLink to="/auth/login">{t("auth.forgotPage.backToLogin")}</NavLink>
            </div>
        </form>
    )
}

export default ResetPasswordForm