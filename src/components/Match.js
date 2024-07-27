import React, { useState } from 'react';

const Match = ({ currentMatch, updateScore, endMatch }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleScoreUpdate = (playerId, score) => {
    updateScore(playerId, score);
  };

  if (!currentMatch) {
    return <div>No current match</div>;
  }

  return (
    <div>
      <h2>Current Match</h2>
      <div>
        <span>{currentMatch.player1.name}</span>
        <input 
          type="number" 
          value={player1Score} 
          onChange={(e) => setPlayer1Score(Number(e.target.value))}
        />
        <button onClick={() => handleScoreUpdate(currentMatch.player1.id, player1Score)}>Update Score</button>
      </div>
      <div>
        <span>{currentMatch.player2.name}</span>
        <input 
          type="number" 
          value={player2Score} 
          onChange={(e) => setPlayer2Score(Number(e.target.value))}
        />
        <button onClick={() => handleScoreUpdate(currentMatch.player2.id, player2Score)}>Update Score</button>
      </div>
      <button onClick={endMatch}>End Match</button>
    </div>
  );
};

export default Match;
