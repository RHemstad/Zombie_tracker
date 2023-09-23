import './header.css';
import React from 'react';
import Nav from '../nav/Nav';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
<header className="header">
<h1><Link to="/">Zombie Tracker</Link></h1>
<Nav />
</header>
        
        
        
    </>
  )
}

export default Header