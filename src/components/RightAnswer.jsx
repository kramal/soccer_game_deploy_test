import React from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function RightAnswer()  {
  const navigate = useNavigate();
  const navigateToYouAreIn = () => {
    // 👇️ navigate to /YouAreIn
    navigate('/YouAreIn');
  };
  return (
    <div>
      <div className="WrongA">
        <h1>YOU GOT IT</h1>
        <h2>and win R180 000 in Airtime and Data</h2>
        <img src="photos/RightSign.png" alt=""/>
        <h2>Enter your cell number and double your chances!</h2>
        <input></input>       
        <h2>By entering your number, you agree to our third party marketing policy.</h2>
        <button className="goAgainButton" onClick={navigateToYouAreIn}>Double Up!</button>
      </div>
    </div>
  );
}


export default RightAnswer;
