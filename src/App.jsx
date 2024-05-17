import React from 'react'
import Home from './Home/Home'
import Courses from './courses/courses';
import { Route, Routes } from "react-router-dom"
import Contacts from './Contact/Contact';
import Sign from './component/Sign';


function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/Contact' element={<Contacts/>}/>
      <Route path='/sign' element={<Sign/>}/>

    </Routes>
    </>
  );
}
export default App