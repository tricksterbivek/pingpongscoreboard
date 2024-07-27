import React from 'react';
import Player from './Player';

const PlayerList = ({ players, removePlayer }) => {
  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map(player => (
          <Player key={player.id} player={player} removePlayer={removePlayer} />
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
