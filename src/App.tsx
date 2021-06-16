import React from 'react';
import './App.css';

import { getTimeByTimeZone } from './Utils/timezone';

import Dashboard from './Pages/Dashboard/Dashboard';
import "antd/dist/antd.css";
import { Redirect, Route } from 'react-router';
import Auth from './Pages/Auth/Auth';

const App = () => {

  getTimeByTimeZone('2021-06-08T18:21:36.129444+06:00')

  return(
    <>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route path="/dashboard" render={()=><Dashboard/>}/>
      <Route path="/auth/login" render={()=><Auth/>}/>
    </>
  )
}

export default App;
