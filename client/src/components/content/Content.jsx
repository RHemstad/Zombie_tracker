import './content.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../home/Home';
import Dashboard from '../dashboard/Dashboard';
import Map from '../map/Map';
import Register from '../register/Register';
import DashboardContainer from '../dash_child_container/DashboardContainer';



import apiConn from '../../api/axios';

const Content = () => {



  return (
    <>
    <main>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/map" element={<Map />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/dashboard/*" element={<Dashboard />} />
   </Routes>
    </main>
    
    
    </>
  )
}

export default Content