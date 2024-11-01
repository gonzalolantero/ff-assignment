import React from 'react';

const SelectFilter = ({ label, value, options, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-gray-200 border rounded p-2 text-neutral-900"
      >
        <option value="">All {label}s</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
