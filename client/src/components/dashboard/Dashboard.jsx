import "./dashboard.css";
import React from 'react';
import Subheader from '../subheader/Subheader';
import Toolbar from "../toolbar/Toolbar";
import DashboardContainer from "../dash_child_container/DashboardContainer";
import DashHome from "../dash_home/DashHome";

const Dashboard = () => {

  return (
    <>
    <section>
      THIS IS DASHBOAD
    <h2>Manage Your Zombie Data</h2>


    <Toolbar/>
    <DashboardContainer/>







    </section>

    </>
  )
}

export default Dashboard