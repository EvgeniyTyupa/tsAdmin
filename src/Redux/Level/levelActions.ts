import { SET_CURRENT_LEVEL, SET_LEVELS_DATA, SET_LEVELS_TOTAL } from "./levelConstants";
import { Level } from "./levelTypes";

export type LevelActionTypes = 
    SetLevelsDataActionType | SetLevelsTotalActionType | 
    SetCurrentLevelActionType

type SetLevelsDataActionType = {
    type: typeof SET_LEVELS_DATA,
    levels: Level[]
}

export const setLevelsData = (levels: Level[]): SetLevelsDataActionType => ({
    type: SET_LEVELS_DATA, levels
})

type SetLevelsTotalActionType = {
    type: typeof SET_LEVELS_TOTAL,
    total: number
}

export const setLevelsTotal = (total: number): SetLevelsTotalActionType => ({
    type: SET_LEVELS_TOTAL, total
})

type SetCurrentLevelActionType = {
    type: typeof SET_CURRENT_LEVEL,
    currentLevel: Level | null
}

export const setCurrentLevel = (currentLevel: Level | null): SetCurrentLevelActionType => ({
    type: SET_CURRENT_LEVEL, currentLevel
})