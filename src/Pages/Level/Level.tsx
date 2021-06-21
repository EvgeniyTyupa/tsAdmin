import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './Level.module.css'
import { useTranslation } from 'react-i18next'
import { Table, Input, Button, Space } from 'antd';
import { Level as ILevel } from '../../Redux/Level/levelTypes';
import { useTableColumns } from './useTableColumns';
import LevelForm, { LevelFormValues } from '../../Components/Level/LevelForm';

interface LevelProps {
    levels: ILevel[]
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    currentLevel: ILevel | null
    handleEditModal: (currentLevel: ILevel | null) => void
    handleAddModal: () => void
    addLevel: (data: LevelFormValues) => void
    editLevel: (data: LevelFormValues, levelId?: string) => void
}

const Level = ({ levels, isOpenAddModal, currentLevel, editLevel, isOpenEditModal, handleEditModal, handleAddModal, addLevel }: LevelProps) => {
    const { t } = useTranslation()

    const columns = useTableColumns(handleEditModal)

    console.log(levels)

    return(
        <Layout>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Button onClick={handleAddModal}>+ New</Button>
                </div>
                {isOpenAddModal && <LevelForm type="new" handleModal={handleAddModal} action={addLevel}/>}
                {(isOpenEditModal && currentLevel) && <LevelForm type="edit" handleModal={handleEditModal} action={editLevel} level={currentLevel}/>}
                <Table dataSource={levels} columns={columns}/>
            </div>
        </Layout>
    )
}

export default Level