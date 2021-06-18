import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter,  Redirect, Route, Switch } from 'react-router-dom';

import { getTimeByTimeZone } from './Utils/timezone';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Auth/Login/Login';
import Forgot from './Pages/Auth/Forgot/Forgot';
import Reset from './Pages/Auth/Reset/Reset';
import LevelContainer from './Pages/Level/LevelContainer';

const App = () => {

  getTimeByTimeZone('2021-06-08T18:21:36.129444+06:00')

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard"/>
        </Route>
        <Route exact path="/auth/reset">
          <Redirect to="/dashboard"/>
        </Route>

        {/* AUTH */}
        <Route path="/auth/login" render={()=><Login/>}/>
        <Route path="/auth/forgot" render={()=><Forgot/>}/>
        <Route path="/auth/reset/:token" render={()=><Reset/>}/>

        <ProtectedRoute component={Dashboard} path="/dashboard"/>
        <ProtectedRoute component={LevelContainer} path="/level"/>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
