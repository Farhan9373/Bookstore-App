import React from 'react'
import Home from './Home/Home'
import Courses from './courses/courses';
import { Navigate, Route, Routes } from "react-router-dom"
import Contacts from './Contact/Contact';
import Sign from './component/Sign';
import { Toaster } from 'react-hot-toast';
import {useauth} from './context/AutoProvider';


function App () {
  const [authUser,setauthUser]=useauth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/Sign"/>}/>
      <Route path='/Contact' element={<Contacts/>}/>
      <Route path='/Sign' element={<Sign/>}/>
    </Routes>
      <Toaster/>
    </>
  );
}
export default App