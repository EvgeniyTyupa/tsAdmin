import { CloseSquareFilled } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import FormError from '../../../Common/FormComponents/AuthForm/Errors/FormError/FormError'
import classes from './SendPushModal.module.css'

interface SendPushModalProps {
    handleModal: () => void
}

const SendPushModal = ({ handleModal }: SendPushModalProps) => {
    const { t } = useTranslation()

    const { handleSubmit, control, reset, formState: { errors } } = useForm()

    const [error, setError] = useState<string | null>(null)

    const onSubmit = (data: any) => {
        console.log(data)
        setError("Users not devices linked")
    }

    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <Button className={classes.closeBut} onClick={() => handleModal()}>
                    <CloseSquareFilled />
                </Button>
                <form onSubmit={handleSubmit(data => onSubmit(data))}>
                    <div className={classes.field}>
                        <label>Title</label>
                        <Controller
                            control={control}
                            name="title"
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref} }) => (
                                <>
                                    <Input
                                        className={classes.input}
                                        size="large"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                    {errors.title && errors.title.type === 'required' && (
                                    <FormError className={classes.error} message={errors.title.message}/>)}
                                </>
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <label>Description</label>
                        <Controller
                            control={control}
                            name="description"
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref} }) => (
                                <>
                                    <Input.TextArea
                                        className={classes.input}
                                        rows={5}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                    {errors.description && errors.description.type === 'required' && (
                                    <FormError className={classes.error} message={errors.description.message}/>)}
                                </>
                            )}
                        />
                    </div>
                    {error && <FormError message={error}/>}
                    <div className={classes.buttons}>
                        <Button type="primary" htmlType="submit">{t("actions.submit")}</Button>
                        <Button onClick={handleModal}>{t("actions.cancel")}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendPushModal