import React, { useState } from 'react';
import PlayerList from './PlayerList';
import Match from './Match';
import AddPlayerForm from './AddPlayerForm';

const ScoreBoard = () => {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const startMatch = (match) => {
    setCurrentMatch(match);
    setMatches([...matches, match]);
  };

  const endMatch = () => {
    setCurrentMatch(null);
  };

  const updateScore = (playerId, score) => {
    const updatedPlayers = players.map(player => 
      player.id === playerId ? { ...player, score: player.score + score } : player
    );
    setPlayers(updatedPlayers);
  };

  const calculateRankings = () => {
    return players.sort((a, b) => b.score - a.score);
  };

  return (
    <div>
      <h1>Pingpong Scoreboard</h1>
      <AddPlayerForm addPlayer={addPlayer} />
      <PlayerList players={calculateRankings()} removePlayer={removePlayer} />
      <Match currentMatch={currentMatch} updateScore={updateScore} endMatch={endMatch} />
      {/* Button to start a new match can be added here */}
    </div>
  );
};

export default ScoreBoard;
