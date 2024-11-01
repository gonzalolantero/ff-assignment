import React from 'react';
import DoubleRangeSlider from '../helpers/DoubleRangeSlider';

const SliderGroup = ({ sliders, onSliderChange }) => {
  return (
    <>
      {sliders.map((slider) => (
        <DoubleRangeSlider
          key={slider.name}
          label={slider.label}
          min={slider.min}
          max={slider.max}
          values={slider.values}
          onChange={(values) => onSliderChange(slider.name, values)}
        />
      ))}
    </>
  );
};

export default SliderGroup;
