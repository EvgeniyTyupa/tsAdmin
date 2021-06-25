import React from 'react'
import { Card } from 'antd'
import { useTranslation } from 'react-i18next'
import Layout from '../../../Components/Layout/Layout'
import classes from './Transactions.module.css'

const Transactions = () => {
    const { t } = useTranslation()

    return(
        <Layout>
            <div className={classes.main}>
                <Card>
                    <p>{t("transactions.empty")}</p>
                </Card>
            </div>
        </Layout>
    )
}

export default Transactions