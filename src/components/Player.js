import React from 'react';

const Player = ({ player, removePlayer }) => {
  return (
    <li>
      {player.name} - {player.score}
      <button onClick={() => removePlayer(player.id)}>Remove</button>
    </li>
  );
};

export default Player;
