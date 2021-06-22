import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './Level.module.css'
import { useTranslation } from 'react-i18next'
import { Table, Input, Button, Space, TablePaginationConfig } from 'antd';
import { Level as ILevel } from '../../Redux/Level/levelTypes';
import { useTableColumns } from './useTableColumns';
import LevelForm, { LevelFormValues } from '../../Components/Level/LevelForm';
import LevelDeleteModal from '../../Components/Level/LevelDeleteModal/LevelDeleteModal';
import { FilterValue } from 'antd/lib/table/interface';

interface LevelProps {
    levels: ILevel[]
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    currentLevel: ILevel | null
    handleEditModal: (currentLevel: ILevel | null) => void
    handleAddModal: () => void
    addLevel: (data: LevelFormValues) => void
    editLevel: (data: LevelFormValues, levelId?: string) => void
    deleteLevel: (levelId: string) => void
    handleOpenDeleteModal: (currentLevel: ILevel | null) => void
    isOpenDeleteModal: boolean
    limit: number
    handleSize: (current: number, limit?: number) => void
    total: number
    handleTableChange: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: any) => void
    searchLevels: (search: string | null, searchKey: string | null) => void
}

const Level = ({ 
        levels, 
        isOpenAddModal, 
        currentLevel, 
        isOpenDeleteModal, 
        handleOpenDeleteModal, 
        deleteLevel, 
        editLevel, 
        isOpenEditModal, 
        handleEditModal, 
        handleAddModal, 
        addLevel,
        limit,
        handleSize,
        total,
        handleTableChange,
        searchLevels
    }: LevelProps) => {
    const { t } = useTranslation()

    const columns = useTableColumns(handleEditModal, handleOpenDeleteModal, searchLevels)

    return(
        <Layout>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Button onClick={handleAddModal}>{t("actions.new")}</Button>
                </div>
                {isOpenAddModal && <LevelForm type="new" handleModal={handleAddModal} action={addLevel}/>}
                {(isOpenEditModal && currentLevel) && <LevelForm type="edit" handleModal={handleEditModal} action={editLevel} level={currentLevel}/>}
                {(isOpenDeleteModal && currentLevel) && <LevelDeleteModal levelId={currentLevel?.id} closeModal={handleOpenDeleteModal} deleteLevel={deleteLevel}/>}
                <Table 
                    onChange={handleTableChange}
                    dataSource={levels} 
                    columns={columns} 
                    pagination={{
                        defaultPageSize: limit,
                        total: total,
                        showSizeChanger: true,
                        pageSizeOptions: ['10', '25', '50', '100'],
                        onChange: handleSize
                    }}
                />
            </div>
        </Layout>
    )
}

export default Level