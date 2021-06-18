import React from 'react'
import classes from '../AuthForm.module.css'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import { cx } from '../../../../../Utils/classnames';
import FormError from '../Errors/FormError/FormError';

interface ForgotFormProps {
    forgot: (email: string) => void
    serverError: string | null
    serverMessage: string | null
}

interface FormValues {
    email: string
}

const ForgotForm = ({ forgot, serverError, serverMessage }: ForgotFormProps) => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>()

    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        forgot(data.email)
        reset({
            email: ""
        })
    }

    return(
        <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.main}>
            {!serverMessage && <div className={classes.field}>
                <Controller 
                    control={control}
                    name="email"
                    rules={{ required: t<string>("errors.required") }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <>
                            <Input
                                className={classes.input}
                                size="large"
                                placeholder={t("auth.email")}
                                prefix={<UserOutlined/>}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}    
                            />
                            {errors.email && errors.email.type === 'required' && (
                                <FormError message={errors.email.message}/>
                            )}
                        </>
                    )}
                />
            </div>}
            {serverError && <FormError className={classes.serverError} message={serverError}/>}
            {!serverMessage && <Button type="primary" htmlType="submit">{t("auth.submit")}</Button>}
            {serverMessage && <p>{serverMessage}</p>}
            <div className={cx(classes.field, classes.forgot)}>
                <NavLink to="/auth/login">{t("auth.forgotPage.backToLogin")}</NavLink>
            </div>
        </form>
    )
}

export default ForgotForm