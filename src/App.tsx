import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter,  Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Login from './Pages/Auth/Login/Login';
import Forgot from './Pages/Auth/Forgot/Forgot';
import Reset from './Pages/Auth/Reset/Reset';
import NotFound from './Pages/NotFound/NotFound';
import { useAppRoutes } from './Utils/hooks/useAppRoutes';

const App = () => {
  const protectedRoutes = useAppRoutes()

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

        {protectedRoutes.map(route => (
          <ProtectedRoute component={route.component} exact={route.exact} path={route.path}/>
        ))}
       
        {/* 404 NOT FOUND */}
        <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
