
import React, { Component } from 'react';
import Countdown from './Countdown';

function GameOver() {
  const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
  return (
    <div className="WrongA">
      <img src="photos/gameover.png" alt=""/>
      <h1>GAME OVER!</h1>
      <h2>Time until we pick the lucky 200 winners:</h2>
      <Countdown date={`${year}-12-24T00:00:00`} />
      <h2>Good luck and come back tomorrow to play again!</h2>
      <div className='wrong-wrong'>
        <img src='photos/wrong.png'/>
        <img src='photos/wrong.png'/>
      </div>
    </div>
);
}
  

export default GameOver;
