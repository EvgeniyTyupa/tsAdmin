import React from 'react'
import { Button, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { User } from '../../../Redux/User/userTypes'
import classes from './ProfileForm.module.css'
import { useProfileFormFields } from './useProfileFormFields'
import FormError from '../../Common/FormComponents/AuthForm/Errors/FormError/FormError'
import { KeyOutlined, SaveFilled } from '@ant-design/icons'

interface ProfileFormProps {
    user: User | null
    handleChangePassModal: () => void
    updateProfile: (email: string, first_name: string, last_name: string, phone: string, mobile: string) => void
    serverError: string | null
    serverMessage: string | null
}

interface FormValues { 
    first_name: string
    last_name: string
    email: string
    mobile: string
    phone: string
    job: string
}

const ProfileForm = ({ user, handleChangePassModal, updateProfile, serverError, serverMessage }: ProfileFormProps) => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<any>({
        defaultValues: {
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            email: user?.email || "",
            mobile: user?.mobile || "",
            phone: user?.phone || "",
            job: user?.job || ""
        }
    })

    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        updateProfile(data.email, data.first_name, data.last_name, data.phone, data.mobile)
    }

    const profileFields = useProfileFormFields()

    return(
        <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.main}>
            {profileFields.map(item => {
                return(
                    <div className={classes.field} key={item.name}>
                        <label><span className={classes.requiredMark}>* </span>{item.label}: </label>
                        <Controller
                            control={control}
                            name={item.name}
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <>
                                    <Input
                                        className={classes.input}
                                        size={"middle"}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        disabled={item.name === "job"}
                                    />
                                    {errors[item.name] && errors[item.name].type === 'required' && (
                                        <FormError message={errors[item.name].message}/>
                                    )}
                                </>
                            )}
                        />
                    </div>
                )
            })}
            <div className={classes.serverMessages}>
                {serverError && <FormError message={serverError}/>}
                {serverMessage && <p>{serverMessage}</p>}
            </div>
            <div className={classes.buttons}>
                <Button type="primary" icon={<SaveFilled />} htmlType="submit">{t("profile.form.submit")}</Button>
                <Button icon={<KeyOutlined />} onClick={handleChangePassModal}>{t("profile.form.changePass")}</Button>
            </div>
        </form>
    )
}

export default ProfileForm