import React, { useEffect, useState } from "react";
import { loadPlayerData } from "./utils/dataUtils";
import PlayerTable from "./components/PlayerTable";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/shared/Sidebar";
import Layout from "./components/shared/Layout";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  return (
    <div className='app'>
      <Layout />
      <Dashboard />
      <PlayerTable players={players} />
    </div>
  );
}

export default App;
