// App.js or your main component
import React, { useState } from 'react';
import Header from './components/shared/Header';
import PlayerTable from './components/shared/PlayerTable';
import Sidebar from './components/shared/Sidebar';

function App() {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PlayerTable filters={filters} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
