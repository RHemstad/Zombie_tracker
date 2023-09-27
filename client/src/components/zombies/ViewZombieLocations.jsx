import React, {useState, useEffect} from 'react'
import apiConn from '../../api/axios';
import Map from '../map/Map';

const ViewZombieLocations = () => {

    const [zombieLocations, setZombieLocations] = useState([])

    useEffect(() => {
      getZombieLocations()
    }, [])
    
    function getZombieLocations() {
      apiConn.get('/zombies')
        .then(response => {
          setZombieLocations(response.data)
        })
      .catch(error => {
        console.log(error)
      })
    }
    


  return (
    <>
    <div>viewZombieLocations</div>
    {/* todo - pass zombieLocations to Map component */}
    <Map zombieLocations={zombieLocations}/>
    

    </>
  )
}

export default ViewZombieLocations