import React, { useState } from "react";
import DoubleRangeSlider from "../DoubleRangeSlider";
import { usePlayers } from '../../context/PlayerContext';

function Sidebar({ filters, setFilters }) {
  // Default ranges for each attribute
  const DEFAULT_RANGES = {
    dribbleSkills: { min: 0, max: 100 },
    age: { min: 0, max: 16 },
    ballControl: { min: 0, max: 100 },
    length: { min: 0, max: 210 },
    weight: { min: 0, max: 120 },
    passingUnderPressure: { min: 0, max: 100 },
  };

  // State to track each slider's range
  const [sliderValues, setSliderValues] = useState({
    dribbleSkills: [filters.minDribbleSkills || DEFAULT_RANGES.dribbleSkills.min, filters.maxDribbleSkills || DEFAULT_RANGES.dribbleSkills.max],
    age: [filters.minAge || DEFAULT_RANGES.age.min, filters.maxAge || DEFAULT_RANGES.age.max],
    ballControl: [filters.minBallControl || DEFAULT_RANGES.ballControl.min, filters.maxBallControl || DEFAULT_RANGES.ballControl.max],
    length: [filters.minLength || DEFAULT_RANGES.length.min, filters.maxLength || DEFAULT_RANGES.length.max],
    weight: [filters.minWeight || DEFAULT_RANGES.weight.min, filters.maxWeight || DEFAULT_RANGES.weight.max],
    passingUnderPressure: [filters.minPassingUnderPressure || DEFAULT_RANGES.passingUnderPressure.min, filters.maxPassingUnderPressure || DEFAULT_RANGES.passingUnderPressure.max],
  });

  // Update filters on slider change
  const handleSliderChange = (name, values) => {
    setSliderValues((prev) => ({ ...prev, [name]: values }));
    setFilters((prev) => ({
      ...prev,
      [`min${name.charAt(0).toUpperCase() + name.slice(1)}`]: values[0],
      [`max${name.charAt(0).toUpperCase() + name.slice(1)}`]: values[1],
    }));
  };

  const players = usePlayers();
  const uniqueTeams = Array.from(new Set(players.map(player => player.Team)));
  const uniquePositions = Array.from(new Set(players.map(player => player.Position)));

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

  return (
    <div className="bg-neutral-900 w-60 p-5 flex flex-col text-neutral-200">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <DoubleRangeSlider
        label="Dribble Skills"
        min={DEFAULT_RANGES.dribbleSkills.min}
        max={DEFAULT_RANGES.dribbleSkills.max}
        values={sliderValues.dribbleSkills}
        onChange={(values) => handleSliderChange("dribbleSkills", values)}
      />

      <DoubleRangeSlider
        label="Length"
        min={DEFAULT_RANGES.length.min}
        max={DEFAULT_RANGES.length.max}
        values={sliderValues.length}
        onChange={(values) => handleSliderChange("length", values)}
      />

      <DoubleRangeSlider
        label="Weight"
        min={DEFAULT_RANGES.weight.min}
        max={DEFAULT_RANGES.weight.max}
        values={sliderValues.weight}
        onChange={(values) => handleSliderChange("weight", values)}
      />

      <DoubleRangeSlider
        label="Age"
        min={DEFAULT_RANGES.age.min}
        max={DEFAULT_RANGES.age.max}
        values={sliderValues.age}
        onChange={(values) => handleSliderChange("age", values)}
      />

      <DoubleRangeSlider
        label="Ball Control"
        min={DEFAULT_RANGES.ballControl.min}
        max={DEFAULT_RANGES.ballControl.max}
        values={sliderValues.ballControl}
        onChange={(values) => handleSliderChange("ballControl", values)}
      />

      <DoubleRangeSlider
        label="Passing Under Pressure"
        min={DEFAULT_RANGES.passingUnderPressure.min}
        max={DEFAULT_RANGES.passingUnderPressure.max}
        values={sliderValues.passingUnderPressure}
        onChange={(values) => handleSliderChange("passingUnderPressure", values)}
      />

      <div className="mb-6">
        <label className="block mb-2">Team</label>
        <select
          value={teamFilter}
          onChange={handleTeamChange}
          className="w-full bg-gray-200 border rounded p-2 text-neutral-900"
        >
          <option value="">All Teams</option>
          {uniqueTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2">Position</label>
        <select
          value={positionFilter}
          onChange={handlePositionChange}
          className="w-full bg-gray-200 border rounded p-2 text-neutral-900"
        >
          <option value="">All Positions</option>
          {uniquePositions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
