import Layout from '../../Components/Layout/Layout'
import React from 'react'
import classes from './Level.module.css'
import { useTranslation } from 'react-i18next'
import { Table, Input, Button, Space } from 'antd';
import { Level as ILevel } from '../../Redux/Level/levelTypes';

interface LevelProps {
    levels: ILevel[]
}

const Level = ({ levels }: LevelProps) => {
    const { t } = useTranslation()

    console.log(levels)

    return(
        <Layout>
            <div className={classes.main}>
                <h2>{t("menu.level")}</h2>
                <Table/>
            </div>
        </Layout>
    )
}

export default Level