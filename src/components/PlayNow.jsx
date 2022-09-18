import React from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function PlayNow()  {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /Home
    navigate('/Home');
  };
    return (
      <div className="Play-Now">
        <div className='Heading'>
            <h1>SPOT THE BALL</h1>
            <h2>and win R180 000 in Airtime & Data</h2>
            <img className="Player" src="photos/player.png" alt=""/>
        </div>
        <div>
            <button className="play-now" onClick={navigateToHome}>Play Now</button>
        </div>

      </div>
    );
  }


export default PlayNow;