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
import Kanban from '../components/Kanban';
import YouTube from '../components/YouTube';
import TikTok from '../components/TikTok';
import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Settings from '../components/Settings';

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
          <Route path={pagesPaths.kanban} element= { <Kanban/> }/>
          <Route path={pagesPaths.youTube} element= { <YouTube/> }/>
          <Route path={pagesPaths.tikTok} element= { <TikTok/> }/>
          <Route path={pagesPaths.instagram} element= { <Instagram/> }/>
          <Route path={pagesPaths.twitter} element= { <Twitter/> }/>
          <Route path={pagesPaths.settings} element= { <Settings/> }/>
        </Route>
      </Route>
    </Routes>
  )
};

export default AppRoutes;