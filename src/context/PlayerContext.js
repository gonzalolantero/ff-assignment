import React, { createContext, useContext, useState, useEffect } from "react";
import { loadPlayerData } from "../utils/dataUtils";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  return (
    <PlayerContext.Provider value={players}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayers = () => useContext(PlayerContext);
