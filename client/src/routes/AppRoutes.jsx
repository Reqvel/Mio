import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Landing/> }/>
      <Route path='/SignIn' element={ <SignIn/> }/>
      <Route path='/SignUp' element={ <SignUp/> }/>
      <Route path='/Home' element={ <Home/> }/>
    </Routes>
  )
};

export default AppRoutes;