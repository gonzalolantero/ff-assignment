// hooks/useFilterHandlers.js
import { useState } from 'react';

const useFilterHandlers = (setFilters) => {
  const [teamFilter, setTeamFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState('');

  const handleTeamChange = (event) => {
    const selectedTeam = event.target.value;
    setTeamFilter(selectedTeam);
    setFilters((prev) => ({
      ...prev,
      team: selectedTeam || undefined,
    }));
  };

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setPositionFilter(selectedPosition);
    setFilters((prev) => ({
      ...prev,
      position: selectedPosition || undefined,
    }));
  };

  return { teamFilter, positionFilter, handleTeamChange, handlePositionChange };
};

export default useFilterHandlers;
