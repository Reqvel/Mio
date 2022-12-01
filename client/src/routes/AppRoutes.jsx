import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import pagesPaths from './PagesPaths';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={pagesPaths.landing} element={ <Landing/> }/>
      <Route path={pagesPaths.signIn} element={ <SignIn/> }/>
      <Route path={pagesPaths.resetPassword} element={ <ResetPassword/> }/>
      <Route path={pagesPaths.signUp} element={ <SignUp/> }/>
      <Route element={ <PrivateRoute/> }>
        <Route path={pagesPaths.dashboard} element={ <Dashboard/> }/>
      </Route>
    </Routes>
  )
};

export default AppRoutes;