import { CloseSquareFilled, DollarCircleOutlined, PercentageOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Level } from '../../Redux/Level/levelTypes'
import { cx } from '../../Utils/classnames'
import ColorPicker from '../Common/ColorPicker/ColorPicker'
import FormError from '../Common/FormComponents/AuthForm/Errors/FormError/FormError'
import classes from './LevelForm.module.css'

interface LevelFormProps {
    level?: Level
    type: "new" | "edit"
    action: (data: LevelFormValues, levelId?: string) => void
    handleModal: (currentLevel: Level | null) => void
}

export interface LevelFormValues {
    color: string
    name: string
    description: string
    cashback_parking: number
    real_spent_start: number
    real_spent_end: number
    display_spent_start: number
    display_spent_end: number
}

const LevelForm = ({ level, type, action, handleModal }: LevelFormProps) => {
    
    const { handleSubmit, control, reset, formState: { errors } } = useForm<any>({
        defaultValues: {
            color: level?.color || "#000000",
            name: level?.name || "",
            description: level?.description || "",
            cashback_parking: type === "new" ? 0 : level?.cashback_parking,
            real_spent_start: type === "new" ? 0 : level?.real_spent_start,
            real_spent_end: type === "new" ? 0 : level?.real_spent_end,
            display_spent_start: type === "new" ? 0 : level?.display_spent_start,
            display_spent_end: type === "new" ? 0 : level?.display_spent_end
        }
    })

    const { TextArea } = Input

    const { t } = useTranslation()

    const onSubmit = (data: LevelFormValues) => {
        if(!data.color){
            data.color = "#000000"
        }
        action(data, level?.id)

        reset({
            color: level?.color || "#000000",
            name: level?.name || "",
            description: level?.description || "",
            cashback_parking: level?.cashback_parking || 0,
            real_spent_start: level?.real_spent_start || 0,
            real_spent_end: level?.real_spent_end || 0,
            display_spent_start: level?.display_spent_start || 0,
            display_spent_end: level?.display_spent_end || 0
        })
    }

    console.log('currentLevel', level)

    const fields = [
        {
            id: "cashback",
            label: t("level.form.cashback"),
            name: "cashback_parking"
        },
        {
            id: "spentStart",
            label: t("level.form.real_spent_start"),
            name: "real_spent_start"
        },
        {
            id: "spentEnd",
            label: t("level.form.real_spent_end"),
            name: "real_spent_end"
        },
        {
            id: "displayStart",
            label: t("level.form.display_spent_start"),
            name: "display_spent_start"
        },
        {
            id: "displayEnd",
            label: t("level.form.display_spent_end"),
            name: "display_spent_end"
        },
    ]

    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <Button className={classes.closeBut} onClick={() => handleModal(null)}>
                    <CloseSquareFilled />
                </Button>
                <form onSubmit={handleSubmit(data => onSubmit(data))} className={classes.form}>
                    <div className={cx(classes.field, classes.colorField)}>
                        <label>{t("level.table.color")}: </label>
                        <Controller
                            control={control}
                            name="color"
                            render={({ field: { onChange, value } }) => (
                                <ColorPicker color={value} colorPicker onChange={onChange}/>
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <label>{t("level.form.name")}: </label>
                        <Controller
                            control={control}
                            name="name"
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <>
                                    <Input
                                        className={classes.input}
                                        size="large"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                    {errors.name && errors.name.type === 'required' && (
                                    <FormError className={classes.error} message={errors.name.message}/>
                                )}
                                </>
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <label>{t("level.form.description")}: </label>
                        <Controller
                            control={control}
                            name="description"
                            rules={{ required: t<string>("errors.required") }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <>
                                    <TextArea
                                        rows={5}
                                        className={classes.input}
                                        size="large"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                    {errors.description && errors.description.type === 'required' && (
                                        <FormError className={classes.error} message={errors.description.message}/>
                                    )}
                                </>
                            )}
                        />
                    </div>
                    {fields.map(item => (
                        <div className={classes.field} key={item.id}>
                            <label>{item.label}: </label>
                            <Controller
                                control={control}
                                name={item.name}
                                rules={{ required: t<string>("errors.required") }}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <>
                                        <Input
                                            className={classes.input}
                                            size="large"
                                            prefix={item.id === "cashback" ? <PercentageOutlined /> : "$"}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                        {errors[item.name] && errors[item.name].type === 'required' && (
                                        <FormError className={classes.error} message={errors[item.name].message}/>
                                    )}
                                    </>
                                )}
                            />
                        </div>
                    ))}
                    <Button type="primary" htmlType="submit">{type === "new" ? t("level.form.submit") : t("level.form.submitEdit")}</Button>
                </form>
            </div>
        </div>
    )
}

export default LevelForm