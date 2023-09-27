import './dashboard_container.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import DashHome from '../dash_home/DashHome';


const DashboardContainer = () => {
  return (
    <>


<section className="dash-container">
This is dashboard container with the routes
How do I load home here via routes because I need the toolbar links to be able to populate
this dash_child_container with the correct content
<Routes>
<Route path="/dashboard/dash_home" element={<DashHome />} />
</Routes>
<br/>
******************* <br></br>

<section><DashHome />




</section>

</section>


    
    
    </>
  )
}

export default DashboardContainer