import React, { useEffect, useState } from "react";
import { loadPlayerData } from "./utils/dataUtils";
import PlayerTable from "./components/PlayerTable";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Load data and set state
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  

  return (
    <div className="App">
      <h1>Player Dashboard</h1>
      <PlayerTable />
    </div>
  );
}

export default App;
