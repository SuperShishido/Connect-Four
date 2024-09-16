import React from 'react';
import "./StartPage.css";

const StartPage = ({ onStartGame }) => {
  return (
    <div className="start-page">
      <h1>Connect Four</h1>
      <button onClick={() => onStartGame(1)}>1 Minute</button>
      <button onClick={() => onStartGame(5)}>5 Minutes</button>
      <button onClick={() => onStartGame(10)}>10 Minutes</button>
    </div>
  );
};

export default StartPage;
