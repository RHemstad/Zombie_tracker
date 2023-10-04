import "./hero.css";
import React from 'react';
import {Link} from "react-router-dom";
import Button from '../button/Button';
import {motion, AnimatePresence} from "framer-motion";

const Hero = () => {
  return (
    <>

<motion.section
className="hero glass-effect"
id="hero_wrapper"
  initial={{ opacity:0 }}
  animate={{ opacity:1 }}
  transition={{ duration: 0.5, delay: 2.1 }}
>

<p>Manage and keep track of your zombie data in a fun and interactive way with our Zombie Database Management System. {/*Whether you're a zombie enthusiast or just curious, our application allows you to add, edit, and delete zombie records seamlessly.*/}</p>

<Link to="/register">
<Button className="primary-button">Get Started</Button>
</Link>
 
</motion.section>
    
    </>
  )
}

export default Hero