import { useTranslation } from "react-i18next"
import { Level } from '../../../Redux/Level/levelTypes'
import { getTimeByTimeZone } from '../../../Utils/timezone'
import { Button, DatePicker, Input, Space } from 'antd'
import { DeleteFilled, EditFilled, SearchOutlined } from '@ant-design/icons'
import ColorPicker from "../../../Components/Common/ColorPicker/ColorPicker"
import { KEY_CASHBACK, KEY_COLOR, KEY_DISPLAY_START, KEY_NAME, KEY_REAL_START, KEY_UPDATED_AT } from "../../../Redux/Level/levelConstants"

export const useTableColumns = (
        handleEditModal: (currentLevel: Level | null) => void, 
        handleOpenDeleteModal: (currentLevel: Level | null) => void,
        searchLevels: (search: string | null, searchKey: string | null) => void
    ) => {
    const { t } = useTranslation()

    const GEL = "$"

    const columns = [
        {
            title: t("level.table.color"),
            dataIndex: 'color',
            key: KEY_COLOR,
            sorter: true,
            ...getColumnSearchProps('color', searchLevels),
            render: (payload: string) => {
                return (
                    <ColorPicker color={payload}/>
                )
            },
            
        },
        {
            title: t("level.table.name"),
            dataIndex: "name",
            key: KEY_NAME,
            sorter: true,
            ...getColumnSearchProps('name', searchLevels)
        },
        {
            title: t("level.table.cashback"),
            dataIndex: "cashback_parking",
            key: KEY_CASHBACK,
            sorter: true,
            ...getColumnSearchProps('cashback_parking', searchLevels),
            render: (payload: string) => {
                return <span>{payload}%</span>
            }
        },
        {
            title: t("level.table.displaySpent"),
            key: KEY_DISPLAY_START,
            sorter: true,
            ...getColumnSearchProps('display_spent_start', searchLevels),
            render: (payload: Level) => {
                return <span>{payload.display_spent_start} - {payload.display_spent_end}{GEL}</span>
            }
            
        },
        {
            title: t("level.table.realSpent"),
            key: KEY_REAL_START,
            sorter: true,
            ...getColumnSearchProps('real_spent_start', searchLevels),
            render: (payload: Level) => {
                return <span>{payload.real_spent_start} - {payload.real_spent_end}{GEL}</span>
            }
        },
        {
            title: t("level.table.updated"),
            key: KEY_UPDATED_AT,
            sorter: true,
            ...getColumnSearchProps('updated_at', searchLevels),
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
                        <Button danger onClick={() => handleOpenDeleteModal(payload)}>
                            <DeleteFilled/>
                        </Button>
                    </>
                    
                )
            }
        }
    ]

    return columns
}



const getColumnSearchProps = (dataIndex: string, searchLevels: (search: string | null, searchKey: string | null) => void) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
        <div style={{ padding: 8 }}>
            {dataIndex != KEY_UPDATED_AT ? 
            <Input 
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys}
                onChange={e => setSelectedKeys(e.target.value) ? [e.target.value] : []}
            /> : 
            <div>
                <DatePicker.RangePicker onChange={e => {
                    if(e){
                        let from = getTimeByTimeZone(e[0]?.year() + "-" + (e[0] && e[0].month() + 1) + "-" + e[0]?.date())
                        let to = getTimeByTimeZone(e[1]?.year() + "-" + (e[1] && e[1].month() + 1) + "-" + e[1]?.date())
                        setSelectedKeys(from + "," + to)
                    }
                }}/>
            </div>
            }
            <Space style={{marginTop: 5}}>
                <Button onClick={() => {
                    confirm({ closeDropdown: true })
                    searchLevels(selectedKeys, dataIndex)
                }} type="primary" size="small" icon={<SearchOutlined/>}>
                    Search
                </Button>
                <Button danger size="small" onClick={() => {
                    confirm({ closeDropdown: true })
                    setSelectedKeys("")
                    searchLevels(null, null)
                }}>
                    Reset
                </Button>
            </Space>
        </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }}/>, 
    render: (text: string) => {
        return(
            <p>{text}</p>
        )
    }
})