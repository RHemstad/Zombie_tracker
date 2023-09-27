import React, {useState, useEffect} from 'react'
import apiConn from '../../api/axios';

const ViewZombies = ({zombies}) => {

/*
"zombie_id": 1,
        "type": "Slow",
        "id": "US",
        "name": "United States",
        "value": 100,
        "notes": "these are notes affiliated with this zombie",
        "user_id": 1
*/



  return (
    <>
    <h3>THIS IS VIEW ZOMBIES COMPONENT</h3>
    {zombies.map(zombie => {  
    return (
        <div key={zombie.zombie_id}>
        <p>Type of Zombie: {zombie.type}</p>
        <p>Location Spotted: {zombie.name}</p>
        <p>Id of user who reported this: {zombie.user_id}</p>
        </div>
    )
 })}


    
    
    
    </>
  )
}

export default ViewZombies