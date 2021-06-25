import React from 'react'
import { CloseSquareFilled } from '@ant-design/icons'
import { Button } from 'antd'
import classes from './DeleteModal.module.css'
import { Level } from '../../../Redux/Level/levelTypes'
import { useTranslation } from 'react-i18next'

interface Props {
    deleteAction: (itemId: string) => void
    closeModal: (item: any) => void
    itemId: string
}

const DeleteModal = ({ deleteAction, closeModal, itemId }: Props) => {
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
                        <Button danger onClick={() => deleteAction(itemId)}>{t("actions.remove")}</Button>
                        <Button onClick={() => closeModal(null)}>{t("actions.cancel")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal