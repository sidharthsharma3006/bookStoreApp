import React from 'react'
import Home from './pages/Home'
import Course from './pages/Course'
import { Outlet, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/Signup'
function App() {
  return (
    <>   
  
      <Routes>  
        <Route  path="/" 
        element={
        <>
        <Navbar/>  
        <Outlet/>
        <Footer/>
        </>} 
        > 

        <Route index element={<Home/>}/> 
        <Route path="course" element={<Course/>}/> 

        </Route> 
        <Route path='/signup' element={<Signup/>} />
      </Routes> 

    </>
  )
}

export default App