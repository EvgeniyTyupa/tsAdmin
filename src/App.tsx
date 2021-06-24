import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter,  Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Login from './Pages/Auth/Login/Login';
import Forgot from './Pages/Auth/Forgot/Forgot';
import Reset from './Pages/Auth/Reset/Reset';
import LevelContainer from './Pages/Level/LevelContainer';
import ProfileContainer from './Pages/Profile/ProfileContainer';
import DashboardContainer from './Pages/Dashboard/DashboardContainer';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
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

        {/* SYSTEM */}
        <ProtectedRoute component={DashboardContainer} path="/dashboard"/>
        <ProtectedRoute component={LevelContainer} path="/levels"/>
        <ProtectedRoute component={ProfileContainer} path="/profile"/>

        {/* 404 NOT FOUND */}
        <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
