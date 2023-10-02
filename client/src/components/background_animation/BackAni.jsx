import React from 'react'
import "./back_ani.css";
import grass from '../../assets/images/grass.svg';
import moregrass from '../../assets/images/grass2.svg';
import moon from '../../assets/images/moon.svg';

const BackAni = () => {
  return (
    <>
    
{/* ******************** */}
{/* BACKGROUND ANIMATION */}
{/* ******************** */}

<div id="cloud-wrap">
<div className="x1">
        <div className="cloud"></div>
    </div>

    <div className="x2">
        <div className="cloud"></div>
    </div>

    <div className="x3">
        <div className="cloud"></div>
    </div>
    {/*
    <div className="x4">
        <div className="cloud"></div>
    </div>

<div className="x5">
        <div className="cloud"></div>
  </div> */}

</div>

<div className="moon"><img src={moon} alt="moon"/></div>
<div className="grass"><img src={grass} alt="dead grass"/></div>
<div className="grass2"><img src={moregrass} alt="more dead grass"/></div>

    
    
    
    
    
    
    </>
  )
}

export default BackAni