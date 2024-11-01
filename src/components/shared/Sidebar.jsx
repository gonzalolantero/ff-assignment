import React from "react";
import { usePlayers } from '../../context/PlayerContext';
import SliderGroup from '../helpers/SliderGroup';
import SelectFilter from '../helpers/SelectFilter';
import useSliderValues from '../../hooks/useSliderValues';
import useFilterHandlers from '../../hooks/useFilterHandlers';
import { Link } from "react-router-dom";

function Sidebar({ filters, setFilters }) {
  const DEFAULT_RANGES = {
    dribbleSkills: { min: 0, max: 100 },
    age: { min: 0, max: 16 },
    ballControl: { min: 0, max: 100 },
    length: { min: 0, max: 210 },
    weight: { min: 0, max: 120 },
    passingUnderPressure: { min: 0, max: 100 },
  };

  const players = usePlayers();
  const uniqueTeams = Array.from(new Set(players.map(player => player.Team)));
  const uniquePositions = Array.from(new Set(players.map(player => player.Position)));


  const [sliderValues, handleSliderChange] = useSliderValues(filters, DEFAULT_RANGES, setFilters);
  const { teamFilter, positionFilter, handleTeamChange, handlePositionChange } = useFilterHandlers(setFilters);


  const sliders = [
    { name: 'dribbleSkills', label: 'Dribble Skills', min: DEFAULT_RANGES.dribbleSkills.min, max: DEFAULT_RANGES.dribbleSkills.max, values: sliderValues.dribbleSkills },
    { name: 'length', label: 'Length', min: DEFAULT_RANGES.length.min, max: DEFAULT_RANGES.length.max, values: sliderValues.length },
    { name: 'weight', label: 'Weight', min: DEFAULT_RANGES.weight.min, max: DEFAULT_RANGES.weight.max, values: sliderValues.weight },
    { name: 'age', label: 'Age', min: DEFAULT_RANGES.age.min, max: DEFAULT_RANGES.age.max, values: sliderValues.age },
    { name: 'ballControl', label: 'Ball Control', min: DEFAULT_RANGES.ballControl.min, max: DEFAULT_RANGES.ballControl.max, values: sliderValues.ballControl },
    { name: 'passingUnderPressure', label: 'Passing Under Pressure', min: DEFAULT_RANGES.passingUnderPressure.min, max: DEFAULT_RANGES.passingUnderPressure.max, values: sliderValues.passingUnderPressure },
  ];

  return (
    <div className="bg-neutral-900 w-60 p-5 flex flex-col text-neutral-200">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <SliderGroup sliders={sliders} onSliderChange={handleSliderChange} />

      <SelectFilter
        label="Team"
        value={teamFilter}
        options={uniqueTeams}
        onChange={handleTeamChange}
      />

      <SelectFilter
        label="Position"
        value={positionFilter}
        options={uniquePositions}
        onChange={handlePositionChange}
      />

      <div className="mt-auto text-center text-sm">
        Made by Gonzalo Lantero :D
        <a href= "mailto: gonzalantero@gmail.com" className="text-blue-200 underline"> gonzalantero@gmail.com </a>
      </div>
    </div>
  );
}

export default Sidebar;
