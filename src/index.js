import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  WrongAnswer,
  RightAnswer,
  GameOver,
  YouAreIn,
  PlayNow,
  Countdown,
  Posts,
  Post
} from "./components";

ReactDOM.render(
  <Router>
   {/*<Navigation />*/}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/wrongAnswer" element={<WrongAnswer />} />
      <Route path="/RightAnswer" element={<RightAnswer />} />
      <Route path="/gameOver" element={<GameOver />} />
      <Route path="/YouAreIn" element={<YouAreIn />} />
      <Route path="/" element={<PlayNow />} />
    </Routes>
    {/*<Footer />*/}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
