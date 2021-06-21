import { useTranslation } from "react-i18next"
import { Level } from '../../Redux/Level/levelTypes'
import { getTimeByTimeZone } from '../../Utils/timezone'
import { Button } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import classes from './Level.module.css'
import ColorPicker from "../../Components/Common/ColorPicker/ColorPicker"


export const useTableColumns = (handleEditModal: (currentLevel: Level | null) => void) => {
    const { t } = useTranslation()

    const GEL = "$"

    const columns = [
        {
            title: t("level.table.color"),
            dataIndex: 'color',
            key: "color",
            render: (payload: string) => {
                return (
                    <ColorPicker color={payload}/>
                )
            }
        },
        {
            title: t("level.table.name"),
            dataIndex: "name",
            key: "name"
        },
        {
            title: t("level.table.cashback"),
            dataIndex: "cashback_parking",
            key: "cashback",
            render: (payload: string) => {
                return <span>{payload}%</span>
            }
        },
        {
            title: t("level.table.displaySpent"),
            key: "display",
            render: (payload: Level) => {
                return <span>{payload.display_spent_start} - {payload.display_spent_end}{GEL}</span>
            }
        },
        {
            title: t("level.table.realSpent"),
            key: "real",
            render: (payload: Level) => {
                return <span>{payload.real_spent_start} - {payload.real_spent_end}{GEL}</span>
            }
        },
        {
            title: t("level.table.updated"),
            key: "updated",
            render: (payload: Level) => {
                return <span>{getTimeByTimeZone(payload.updated_at)}</span>
            }
        },
        {
            title: t("level.table.action"),
            key: "action",
            render: (payload: Level) => {
                return(
                    <>
                        <Button style={{ marginRight: "5px" }} onClick={() => handleEditModal(payload)}>
                            <EditFilled />
                        </Button>
                        <Button danger>
                            <DeleteFilled />
                        </Button>
                    </>
                    
                )
            }
        }
    ]

    return columns
}