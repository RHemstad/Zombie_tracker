import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../home/Home';
import Dashboard from '../dashboard/Dashboard';
import Map from '../map/Map';

const Content = () => {
  return (
    <>
    
    <main>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/map" element={<Map />} />
   </Routes>



    </main>
    
    
    </>
  )
}

export default Content