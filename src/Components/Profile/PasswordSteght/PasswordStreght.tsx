import React from 'react'
import classes from './PasswordStregth.module.css'
import { passwordStrength } from 'check-password-strength'
import { Progress } from 'antd'
import { useTranslation } from 'react-i18next'

interface Props {
    password: string
}



const PasswordStregth = ({ password }: Props) => {

    const { t } = useTranslation()

    let secureProgress = 0
    let color = "red"
    let secureStatus = ""

    switch(passwordStrength(password).value){
        case "Too weak": {
            secureProgress = 10
            color = "red"
            secureStatus = t("profile.changePass.secureStatusTooWeak")
            break
        }
        case "Weak": {
            secureProgress = 40
            color = "tomato"
            secureStatus = t("profile.changePass.secureStatusWeak")
            break
        }
        case "Medium": {
            secureProgress = 75
            color = "orange"
            secureStatus = t("profile.changePass.secureStatusMedium")
            break
        }
        case "Strong": {
            secureProgress = 100
            color = "green"
            secureStatus = t("profile.changePass.secureStatusStrong")
            break
        }
    }

    return(
        <div className={classes.main}>
            <span style={{ color, fontWeight: 500 }}>{secureStatus}</span>
            <Progress percent={secureProgress} strokeColor={color} showInfo={false}/>
            <span className={classes.info}>{t("profile.changePass.info")}</span>
        </div>
    )
}

export default PasswordStregth