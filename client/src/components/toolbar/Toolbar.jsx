import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Toolbar = () => {
    const navigate = useNavigate();
  return (
    <>


<nav id="dashboard-nav">
    <button>View All Zombies</button><button>Add New Zombie</button><button>Edit Zombie</button><button>Delete Zombie</button>
    </nav>
    <nav>
    <li><Link to="/dashboard/map">Zombie Sightings</Link></li>
    </nav>




    </>
  )
}

export default Toolbar