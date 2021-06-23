import React from 'react'
import classes from './Dashboard.module.css'
import Layout from '../../Components/Layout/Layout'
import Breadcrumb from '../../Components/Layout/Breadcrumb/Breadcrumb'
import InfoPoint from '../../Components/Dashboard/InfoPoint/InfoPoint'

const Dashboard = () => {
    return(
        <Layout>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Breadcrumb title={"Dashboard"}/>
                </div>
                <div className={classes.body}>
                    <h1>MALL</h1>
                    <InfoPoint label="test" info={1234}/>
                </div>
                
            </div>
            
        </Layout>
        
    )
}

export default Dashboard