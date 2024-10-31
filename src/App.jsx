import React, { useEffect, useState } from "react";
import { loadPlayerData } from "./utils/dataUtils";
import PlayerTable from "./components/PlayerTable";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  return (
    <div className="flex">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 p-4">
        <PlayerTable players={players} filters={filters} />
      </div>
    </div>
  );
}

export default App;
