import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTimeByTimeZone } from './Utils/timezone';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Pages/Dashboard/Dashboard';
import "antd/dist/antd.css";
import { Redirect, Route } from 'react-router';

const App = () => {

  getTimeByTimeZone('2021-06-08T18:21:36.129444+06:00')

  return(
    <>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route path="/dashboard" render={()=><Dashboard/>}/>
    </>
  )
}

export default App;
