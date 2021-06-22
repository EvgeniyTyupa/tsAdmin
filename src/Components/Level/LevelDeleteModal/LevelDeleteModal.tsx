import React from 'react'
import { CloseSquareFilled } from '@ant-design/icons'
import { Button } from 'antd'
import classes from './LevelDeleteModal.module.css'
import { Level } from '../../../Redux/Level/levelTypes'
import { useTranslation } from 'react-i18next'

interface Props {
    deleteLevel: (levelId: string) => void
    closeModal: (level: Level | null) => void
    levelId: string
}

const LevelDeleteModal = ({ deleteLevel, closeModal, levelId }: Props) => {
    const { t } = useTranslation()
    
    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <Button onClick={() => closeModal(null)} className={classes.closeBut}>
                    <CloseSquareFilled/>
                </Button>
                <div className={classes.body}>
                    <p>{t("actions.removeText")}</p>
                    <div className={classes.buttons}>
                        <Button danger onClick={() => deleteLevel(levelId)}>{t("actions.remove")}</Button>
                        <Button onClick={() => closeModal(null)}>{t("actions.cancel")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelDeleteModal