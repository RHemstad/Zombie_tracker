import "./toolbar.css";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from '../button/Button';

const Toolbar = ({zombie, setZombies}) => {
    const navigate = useNavigate();
  return (
    <>

<nav id="dashboard-nav">
    <button className="primary-button" onClick={e => {setZombies(!zombie);}}>View All Zombies</button>
    <button className="primary-button" onClick={e => {setZombies(!zombie);}}>Add New Zombie</button>
    <button className="primary-button" onClick={e => {setZombies(!zombie);}}>Edit Zombie</button>
    <button className="primary-button" onClick={e => {setZombies(!zombie);}}>Delete Zombie</button>
    </nav>




    </>
  )
}

export default Toolbar