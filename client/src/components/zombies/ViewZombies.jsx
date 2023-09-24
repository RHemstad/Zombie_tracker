import React from 'react'

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