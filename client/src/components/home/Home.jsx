import './animate.css';
import './home.css';

import React from 'react';
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <>




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

    <div className="x4">
        <div className="cloud"></div>
    </div>

    <div className="x5">
        <div className="cloud"></div>
    </div>

</div>
<div id="hole" className="bounceIn"></div>
<div id="moon-wrap" className="drop"><div id="moon"></div></div>
<div id="hand" className="bounceInUp"></div>
<div id="grass" className="bounce-7"></div>
<div id="grass2" className="bounceIn"></div>

<Hero/>




    </>
  )
}

export default Home