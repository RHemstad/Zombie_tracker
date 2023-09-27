import React, {useState, useEffect} from 'react'
import apiConn from '../../api/axios';
import ViewZombies from '../zombies/ViewZombies'

const ZombieList = () => {
    /* ***** GET ZOMBIES ****** */
const [zombie, setZombies] = useState([])

useEffect(() => {
  getZombies()
}, [])

function getZombies() {
    apiConn.get('/zombies')
      .then(response => {
        setZombies(response.data)
      })
    .catch(error => {
      console.log(error)
    })
}

  return (
    <>ZombieList
    <ViewZombies zombies={zombie} />
    
    
    </>
  )
}

export default ZombieList