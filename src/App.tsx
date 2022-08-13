import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import WithNavs from './pages/WithNav/WithNav';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Homepage/>}></Route>
      <Route path='/withNav' element={<WithNavs/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
