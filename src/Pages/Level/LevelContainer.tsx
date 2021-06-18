import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Preloader from '../../Components/Common/Preloader/Preloader'
import { getLevels } from '../../Redux/Level/levelReducer'
import { Level as ILevel} from '../../Redux/Level/levelTypes'
import { AppStateType } from '../../Redux/reduxStore'
import Level from './Level'

interface LevelProps {
    levels: ILevel[]
    isFetching: boolean,
    getLevels: (limit: number, current: number, sorter: string, search: string | null) => void
}

const LevelContainer = ({ levels, isFetching, getLevels }: LevelProps) => {
    const [limit, setLimit] = useState<number>(50)
    const [current, setCurrent] = useState<number>(1)
    const [sorter, setSorter] = useState<string>("id asc")
    const [search, setSearch] = useState<string | null>(null)

    useEffect(() => {
        getLevels(limit, current, sorter, search)
    }, [])

    return(
        <>
            {isFetching ? <Preloader/> :
            <Level levels={levels}/>}
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    levels: state.level.levels,
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    getLevels
})(LevelContainer)