import React from 'react'
import classes from './AuthForm.module.css'
import { Controller, useForm } from 'react-hook-form'
import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Checkbox } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { cx } from '../../../../Utils/classnames';

interface AuthFormProps {
    login: (email: string, password: string) => void
}

interface FormValues {
    email: string
    password: string
    remember: boolean
}

const AuthForm = ({ login }: AuthFormProps) => {
    const { handleSubmit, control, reset } = useForm<FormValues>()

    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        console.log(data)
        login(data.email, data.password)
        reset({
            email: "",
            password: "",
            remember: false
        })
    }

    return(
        <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.main}>
            <div className={classes.field}>
                <Controller 
                    control={control} 
                    name="email" 
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Input 
                            className={classes.input}
                            size="large"
                            placeholder={t("auth.email")}
                            prefix={<UserOutlined/>}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </div>
            <div className={classes.field}>
                <Controller 
                    control={control} 
                    name="password" 
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Input 
                            className={classes.input}
                            type="password"
                            size="large"
                            placeholder={t("auth.password")}
                            prefix={<FontAwesomeIcon icon={faLock}/>}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </div>
            <div className={classes.field}>
                <Controller 
                    control={control} 
                    name="remember" 
                    render={({ field: { onChange, value } }) => (
                        <Checkbox
                            onChange={onChange}
                            value={value}
                        >
                            {t("auth.remember")}
                        </Checkbox>
                    )}
                />
            </div>
            <Button type="primary" htmlType="submit">{t("auth.submit")}</Button>
            <div className={cx(classes.field, classes.forgot)}>
                <NavLink to="/auth/forgot">{t("auth.forgot")}</NavLink>
            </div>
        </form>
    )
}

export default AuthForm