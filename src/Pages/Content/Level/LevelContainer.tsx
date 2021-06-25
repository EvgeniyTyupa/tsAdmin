import { TablePaginationConfig } from 'antd'
import { FilterValue, SorterResult } from 'antd/lib/table/interface'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LevelFormValues } from '../../../Components/Level/LevelForm'
import { setCurrentLevel, setLevelsData } from '../../../Redux/Level/levelActions'
import { getLevels, addLevel, editLevel, deleteLevel } from '../../../Redux/Level/levelReducer'
import { Level as ILevel } from '../../../Redux/Level/levelTypes'
import { AppStateType } from '../../../Redux/reduxStore'
import Level from './Level'

interface LevelProps {
    levels: ILevel[]
    getLevels: (limit: number, current: number, sorter: string, search: string | null, searchKey: string | null) => void
    addLevel: (data: LevelFormValues) => void
    editLevel: (data: LevelFormValues, levelId?: string) => void
    setCurrentLevel: (currentLevel: ILevel | null) => void
    setLevelsData: (levels: ILevel[]) => void
    deleteLevel: (levelId: string) => void
    currentLevel: ILevel | null
    total: number
}

const LevelContainer = ({ levels, getLevels, total, deleteLevel, addLevel, setLevelsData, editLevel, setCurrentLevel, currentLevel }: LevelProps) => {
    const [limit, setLimit] = useState<number>(50)
    const [current, setCurrent] = useState<number>(1)
    const [sorter, setSorter] = useState<string>("display_spent_start asc")
    const [search, setSearch] = useState<string | null>(null)
    const [searchKey, setSearchKey] = useState<string | null>(null)

    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

    const handleEditModal = (level: ILevel | null) => {
        setCurrentLevel(level)
        setIsOpenEditModal(!isOpenEditModal)
    }

    const handleAddModal = () => {
        setIsOpenAddModal(!isOpenAddModal)
    }

    const handleEditLevel = (data: LevelFormValues, levelId?: string) => {
        editLevel(data, levelId)

        let changedLevels = levels.map(item => {
            if(item.id === levelId){
                item = {
                    ...item, 
                    color: data.color,
                    name: data.name,
                    description: data.description,
                    cashback_parking: data.cashback_parking,
                    real_spent_start: data.real_spent_start,
                    real_spent_end: data.real_spent_end,
                    display_spent_start: data.display_spent_start,
                    display_spent_end: data.display_spent_end
                }
                setCurrentLevel(item)
                return item
            }
            return item
        })
        setLevelsData(changedLevels)
    }

    const handleDeleteLevel = (levelId: string) => {
        deleteLevel(levelId)

        let changedLevels = [...levels]
        changedLevels.forEach((item, index) => {
            if(item.id === levelId){
                changedLevels.splice(index, 1)
            }
        })
        setLevelsData(changedLevels)
        handleOpenDeleteModal(null)
    }

    const handleOpenDeleteModal = (level: ILevel | null) => {
        setCurrentLevel(level)
        setIsOpenDeleteModal(!isOpenDeleteModal)
    }

    const handleSize = (current: number, limit?: number) => {
        if(limit){
            setLimit(limit)
        }
        setCurrent(current)
    }



    useEffect(() => {
        getLevels(limit, current, sorter, search, null)
    }, [])

    const handleTableChange = (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, newSorter: any) => {
        if(pagination.pageSize && pagination.current){
            let order = "asc"
            if(newSorter.order === 'descend'){
                order = "desc"
            }
            let sorterString = newSorter.columnKey + " " + order
            setLimit(pagination.pageSize)
            setCurrent(pagination.current)
            if(!sorterString.includes("undefined")){
                setSorter(sorterString)
            }

            getLevels(pagination.pageSize, pagination.current, sorterString.includes("undefined") ? sorter : sorterString, search, searchKey ? searchKey : newSorter.columnKey)
        }
    }

    const searchLevels = (search: string | null, searchKey: string | null) => {
        setSearch(search)
        setSearchKey(searchKey)
        getLevels(limit, 1, sorter, search, searchKey)
    }

    return(
        <>
            <Level 
                editLevel={handleEditLevel} 
                isOpenDeleteModal={isOpenDeleteModal} 
                handleOpenDeleteModal={handleOpenDeleteModal} 
                deleteLevel={handleDeleteLevel} 
                currentLevel={currentLevel} 
                isOpenEditModal={isOpenEditModal} 
                handleEditModal={handleEditModal} 
                levels={levels} 
                isOpenAddModal={isOpenAddModal} 
                handleAddModal={handleAddModal} 
                addLevel={addLevel}
                limit={limit}
                handleSize={handleSize}
                total={total}
                handleTableChange={handleTableChange}
                searchLevels={searchLevels}
            />
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    levels: state.level.levels,
    currentLevel: state.level.currentLevel,
    total: state.level.total
})

export default connect(mapStateToProps, {
    getLevels, 
    addLevel, 
    editLevel, 
    setCurrentLevel, 
    setLevelsData,
    deleteLevel
})(LevelContainer)