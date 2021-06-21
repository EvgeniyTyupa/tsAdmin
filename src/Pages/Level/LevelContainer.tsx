import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LevelFormValues } from '../../Components/Level/LevelForm'
import { setCurrentLevel, setLevelsData } from '../../Redux/Level/levelActions'
import { getLevels, addLevel, editLevel } from '../../Redux/Level/levelReducer'
import { Level as ILevel } from '../../Redux/Level/levelTypes'
import { AppStateType } from '../../Redux/reduxStore'
import Level from './Level'

interface LevelProps {
    levels: ILevel[]
    getLevels: (limit: number, current: number, sorter: string, search: string | null) => void
    addLevel: (data: LevelFormValues) => void
    editLevel: (data: LevelFormValues, levelId?: string) => void
    setCurrentLevel: (currentLevel: ILevel | null) => void
    setLevelsData: (levels: ILevel[]) => void
    currentLevel: ILevel | null
}

const LevelContainer = ({ levels, getLevels, addLevel, setLevelsData, editLevel, setCurrentLevel, currentLevel }: LevelProps) => {
    const [limit, setLimit] = useState<number>(50)
    const [current, setCurrent] = useState<number>(1)
    const [sorter, setSorter] = useState<string>("display_spent_start asc")
    const [search, setSearch] = useState<string | null>(null)

    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)

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
                return item
            }
            return item
        })
        setLevelsData(changedLevels)
    }

    useEffect(() => {
        getLevels(limit, current, sorter, search)
    }, [])

    return(
        <>
            <Level editLevel={handleEditLevel} currentLevel={currentLevel} isOpenEditModal={isOpenEditModal} handleEditModal={handleEditModal} levels={levels} isOpenAddModal={isOpenAddModal} handleAddModal={handleAddModal} addLevel={addLevel}/>
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    levels: state.level.levels,
    currentLevel: state.level.currentLevel
})

export default connect(mapStateToProps, {
    getLevels, addLevel, editLevel, setCurrentLevel, setLevelsData
})(LevelContainer)