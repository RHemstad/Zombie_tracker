import React, {useState, useEffect} from 'react'
import apiConn from '../../api/axios';
import ViewZombies from '../zombies/ViewZombies'


const DashHome = () => {

/* ******* WILL NEED TO MOVE THIS LATER ********* */

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

/* ******************************************** */

  return (
    <>DashHome
        
        This is dashhome
        This shows the zombies in the database:
       <ViewZombies zombies={zombie} />
        
        </>
  )
}

export default DashHome