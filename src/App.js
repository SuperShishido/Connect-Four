import './App.css';
import React, { useState } from 'react';
import StartPage from './components/StartPage';
import ConnectFourBoard from './components/ConnectFourBoard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timerSetting, setTimerSetting] = useState(10); // Default to 10 minutes

  const startGame = (time) => {
    setTimerSetting(time * 60); // Convert minutes to seconds
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <StartPage onStartGame={startGame} />
      ) : (
        <ConnectFourBoard timerSetting={timerSetting} />
      )}
    </div>
  );
}

export default App;
