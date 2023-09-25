import "./hero.css";
import React from 'react';
import {Link} from "react-router-dom";
import Button from '../button/Button';

const Hero = () => {
  return (
    <>

<section id="hero_wrapper" className="hero">

<div>

<p>Manage and keep track of your zombie data in a fun and interactive way with our Zombie Database Management System. Whether you're a zombie enthusiast or just curious, our application allows you to add, edit, and delete zombie records seamlessly.</p>

<Link to="/dashboard">
<Button className="primary-button">Get Started</Button>
</Link>

</div>

</section>
    
    
    
    </>
  )
}

export default Hero