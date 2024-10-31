// components/shared/DoubleRangeSlider.jsx
import React from "react";
import { Range } from "react-range";

function DoubleRangeSlider({ label, min, max, values, onChange }) {
  return (
    <div className="mb-6">
      <label className="block mb-2">{label}</label>
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 bg-gray-300 rounded-full my-4">
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
            <div
                {...props}
                className="h-4 w-4 bg-blue-500 rounded-full focus:outline-none focus:ring-2 ring-blue-300 relative"
            >
                {/* Value Label Below the Thumb */}
                <div
                    className="absolute text-xs text-center -translate-x-1/2 w-8"
                    style={{ top: 20 }} // Position below the thumb
                >
                {values[index]}
                </div>
            </div>
        )}
      />
    </div>
  );
}

export default DoubleRangeSlider;
