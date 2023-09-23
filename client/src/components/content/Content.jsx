import './content.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../home/Home';
import Dashboard from '../dashboard/Dashboard';
import Map from '../map/Map';
import Register from '../register/Register';
import ViewUsersTest from '../register/ViewUsersTest';

import apiConn from '../../api/axios';

const Content = () => {

  /*const users = [
    {
      "user_id": 1,
      "username": "Bexy",
      "password": "password"
    }
  ]
  */

  const [users, setUsers] = useState([])

useEffect(() => {
  getUsers()
}, [])

function getUsers() {
    apiConn.get('/users')
      .then(response => {
        setUsers(response.data)
      })
    .catch(error => {
      console.log(error)
    })
}



  
  return (
    <>
    
    <main>
<p>reading from database</p>
   <ViewUsersTest users={users}></ViewUsersTest>



    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/map" element={<Map />} />
       <Route path="/register" element={<Register />} />

       <Route path="/usersTest" element={<ViewUsersTest />} />
   </Routes>






    </main>
    
    
    </>
  )
}

export default Content