import "./dashboard.css";
import React, {useState} from 'react';
import Toolbar from "../toolbar/Toolbar";
import DashHome from "../dash_home/DashHome";
import AddZombies from "../zombies/AddZombies";
import ZombieList from "../zombies/ZombieList";

//https://stackoverflow.com/questions/71108354/dynamic-react-toggle-button-for-multiple-elements
const Dashboard = () => {
  const [zombie, setZombies] = useState(false);

  return (
    <>
    <section className="dashbord">
    <div className="header">
    <h2>Manage Your Zombie Data</h2>
    </div>

<div className="toolbar">
<Toolbar zombie={zombie} setZombies={setZombies}/>
</div>

<div className="dash-content">
    {/*zombie && <DashboardContainer/>*/}
    {/*zombie ? <AddZombies/> : <DashHome/>*/}
    {zombie ? <ZombieList/> : <DashHome/>}

</div>



    </section>

    </>
  )
}

export default Dashboard