// hooks/useSliderValues.js
import { useState } from 'react';

const useSliderValues = (filters, defaultRanges, setFilters) => {
  const [sliderValues, setSliderValues] = useState({
    dribbleSkills: [filters.minDribbleSkills || defaultRanges.dribbleSkills.min, filters.maxDribbleSkills || defaultRanges.dribbleSkills.max],
    age: [filters.minAge || defaultRanges.age.min, filters.maxAge || defaultRanges.age.max],
    ballControl: [filters.minBallControl || defaultRanges.ballControl.min, filters.maxBallControl || defaultRanges.ballControl.max],
    length: [filters.minLength || defaultRanges.length.min, filters.maxLength || defaultRanges.length.max],
    weight: [filters.minWeight || defaultRanges.weight.min, filters.maxWeight || defaultRanges.weight.max],
    passingUnderPressure: [filters.minPassingUnderPressure || defaultRanges.passingUnderPressure.min, filters.maxPassingUnderPressure || defaultRanges.passingUnderPressure.max],
  });

  const handleSliderChange = (name, values) => {
    setSliderValues((prev) => ({ ...prev, [name]: values }));
    setFilters((prev) => ({
      ...prev,
      [`min${name.charAt(0).toUpperCase() + name.slice(1)}`]: values[0],
      [`max${name.charAt(0).toUpperCase() + name.slice(1)}`]: values[1],
    }));
  };

  return [sliderValues, handleSliderChange];
};

export default useSliderValues;
