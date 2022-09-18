import React from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function WrongAnswer()  {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /Home
    navigate('/Home');
  };
    return (
        <div className="WrongA">
          <h1>TRY AGAIN</h1>
          <h2>and win R180 000 in Airtime and Data</h2>
          <img src="photos/wrongSign.png" alt=""/>
          <h2>Enter your cell number and double your chances!</h2>
          <input></input>
          <h2>By entering your number, you agree to our third-party marketing policy.</h2>
          <button className="goAgainButton" onClick={navigateToHome}>Go Again</button>
        </div>
    );
  }


export default WrongAnswer;
