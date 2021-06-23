import React, { useEffect } from 'react'
import { CloseSquareFilled, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Input } from 'antd'
import classes from './ChangePasswordModal.module.css'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import FormError from '../../Common/FormComponents/AuthForm/Errors/FormError/FormError'
import PasswordStregth from '../PasswordSteght/PasswordStreght'
import { passwordStrength } from 'check-password-strength'

interface Props {
    handleChangePassModal: () => void
    changePassword: (current_password: string, new_password: string, confirm_password: string) => void
    serverError: string | null
    serverMessage: string | null
    setServerError: (message: string | null) => void
    setServerMessage: (message: string | null) => void
}

interface FormValues {
    current_password: string
    new_password: string
    confirm_password: string
}

const ChangePasswordModal = ({ handleChangePassModal, changePassword, serverError, serverMessage, setServerError, setServerMessage }: Props) => {
    const { handleSubmit, control, reset, getValues, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_password: ""
        }
    })

    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        changePassword(data.current_password, data.new_password, data.confirm_password)
    }

    useEffect(() => {
        return () => {
            setServerMessage(null)
            setServerError(null)
        }
    }, [])

    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <div className={classes.header}>
                    <h4>{t("profile.form.changePass")}</h4>
                    <Button onClick={handleChangePassModal} className={classes.closeBut}>
                        <CloseSquareFilled/>
                    </Button>
                </div>
                <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.form}>
                    <div className={classes.field}>
                        <label><span className={classes.requiredMark}>* </span>{t("profile.changePass.current")}: </label>
                        <Controller
                            control={control}
                            name="current_password"
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <div className={classes.inputContainer}>
                                    <Input.Password
                                        className={classes.input}
                                        size="middle"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                    />
                                    {errors.current_password && errors.current_password.type === 'required' && (
                                        <FormError className={classes.error} message={errors.current_password.message}/>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <label><span className={classes.requiredMark}>* </span>{t("profile.changePass.new")}: </label>
                        <Controller
                            control={control}
                            name="new_password"
                            rules={{ 
                                required: t<string>("errors.required"),
                                minLength: 8
                            }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <div className={classes.inputContainer}>
                                    <Input.Password
                                        className={classes.input}
                                        size="middle"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                    />
                                    {errors.new_password && errors.new_password.type === 'required' && (
                                        <FormError className={classes.error} message={errors.new_password.message}/>
                                    )}
                                    {errors.new_password && errors.new_password.type === 'minLength' && (
                                        <FormError className={classes.error} message={t("errors.minPassLength")}/>
                                    )}
                                    {value.length > 0 && <PasswordStregth password={value}/>}
                                </div>
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <label><span className={classes.requiredMark}>* </span>{t("profile.changePass.confirm")}: </label>
                        <Controller
                            control={control}
                            name="confirm_password"
                            rules={{ 
                                required: t<string>("errors.required"),
                                validate: (value => {
                                    return value === getValues().new_password || t<string>("errors.match")
                                })
                            }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <div className={classes.inputContainer}>
                                    <Input.Password
                                        className={classes.input}
                                        size="middle"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                    />
                                    {errors.confirm_password && errors.confirm_password.type === 'required' && (
                                        <FormError className={classes.error} message={errors.confirm_password.message}/>
                                    )}
                                    {(errors.confirm_password && errors.confirm_password.type != "required") && (
                                        <FormError className={classes.error} message={errors.confirm_password.message}/>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                    <div className={classes.serverMessages}>
                        {serverError && <FormError message={serverError}/>}
                        {serverMessage && <p>{serverMessage}</p>}
                    </div>
                    <div className={classes.buttons}>
                        <Button htmlType="submit" type="primary">{t("profile.form.submit")}</Button>
                        <Button onClick={handleChangePassModal}>{t("actions.cancel")}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordModal