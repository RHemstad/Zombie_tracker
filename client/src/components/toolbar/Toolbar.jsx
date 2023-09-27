import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Toolbar = ({zombie, setZombies}) => {
    const navigate = useNavigate();
  return (
    <>

<nav id="dashboard-nav">
    <button onClick={e => {setZombies(!zombie);}}>View All Zombies</button>
    <button onClick={e => {setZombies(!zombie);}}>Add New Zombie</button>
    <button onClick={e => {setZombies(!zombie);}}>Edit zombie</button>
    <button onClick={e => {setZombies(!zombie);}}>Delete Zombie</button>
    </nav>
    <nav>
    <li><Link to="/dashboard/map">Zombie Sightings</Link></li>
    </nav>




    </>
  )
}

export default Toolbar