import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import pagesPaths from './PagesPaths';
import Home from '../components/Home'
import Calendar from '../components/Calendar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={pagesPaths.landing} element={ <Landing/> }/>
      <Route path={pagesPaths.signIn} element={ <SignIn/> }/>
      <Route path={pagesPaths.resetPassword} element={ <ResetPassword/> }/>
      <Route path={pagesPaths.signUp} element={ <SignUp/> }/>
      <Route element={ <PrivateRoute/> }>
        <Route path={pagesPaths.dashboard} element={ <Dashboard/> }>
          <Route path={pagesPaths.home} element={ <Home/> }/>
          <Route path={pagesPaths.calendar} element= { <Calendar/> }/>
        </Route>
      </Route>
    </Routes>
  )
};

export default AppRoutes;