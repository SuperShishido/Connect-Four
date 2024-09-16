import React, { useState, useEffect } from "react";
import "../styles.css";
import ConnectFourLogic from "./ConnectFourLogic";

export default function ConnectFourBoard({ timerSetting }) {
  const [board, setboard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isWinner, setisWinner] = useState(false);
  const [timeLeftX, setTimeLeftX] = useState(timerSetting);
  const [timerActiveX, setTimerActiveX] = useState(true);
  const [timeLeftO, setTimeLeftO] = useState(timerSetting);
  const [timerActiveO, setTimerActiveO] = useState(true);

  // Timer management logic for Player 1
  useEffect(() => {
    if (currentPlayer === "X" && timerActiveX && timeLeftX > 0) {
      const timerId = setTimeout(() => setTimeLeftX(timeLeftX - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeftX === 0) {
      setisWinner(true);
    }
  }, [timeLeftX, timerActiveX, currentPlayer]);

  // Timer management logic for Player 2
  useEffect(() => {
    if (currentPlayer === "O" && timerActiveO && timeLeftO > 0) {
      const timerId = setTimeout(() => setTimeLeftO(timeLeftO - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeftO === 0) {
      setisWinner(true);
    }
  }, [timeLeftO, timerActiveO, currentPlayer]);

  const fullBoard = board.map((row, rowIdx) => {
    return row.map((val, colIdx) => {
      return (
        <ConnectFourLogic
          key={colIdx + "" + rowIdx}
          setboard={setboard}
          colIdx={colIdx}
          rowIdx={rowIdx}
          currentPlayer={currentPlayer}
          board={board}
          setCurrentPlayer={setCurrentPlayer}
          setisWinner={setisWinner}
          isWinner={isWinner}
          setTimeLeftX={setTimeLeftX}
          setTimerActiveX={setTimerActiveX}
          setTimeLeftO={setTimeLeftO}
          setTimerActiveO={setTimerActiveO}
        />
      );
    });
  });

  return (
    <div className="main-Page-Container">
      <div className="current-player-container">
        <h1>Current Player is</h1>
        {currentPlayer === "X" ? (
          <div className="cf-token-X"></div>
        ) : (
          <div className="cf-token-O"> </div>
        )}
      </div>

      {/* Timer Containers for Each Player */}
      <div className="timer-container">
        <div>Player 1 Time Left: {timeLeftX} seconds</div>
        <div>Player 2 Time Left: {timeLeftO} seconds</div>
      </div>

      <div className="cf-Container">{fullBoard}</div>
      {isWinner ? (
        <div className="current-player-container">
          <h1>The Winner is</h1>
          {currentPlayer === "X" ? (
            <div className="cf-token-O"></div>
          ) : (
            <div className="cf-token-X"></div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
