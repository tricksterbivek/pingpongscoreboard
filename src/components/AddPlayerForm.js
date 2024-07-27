import React, { useState } from 'react';

const AddPlayerForm = ({ addPlayer }) => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName) {
      addPlayer({ id: Date.now(), name: playerName, score: 0 });
      setPlayerName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Player Name" 
        value={playerName} 
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
