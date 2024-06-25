// src/FilterModal.jsx
import React, { useState } from 'react';

const FilterModal = ({ filters, onApply, onReset, onClose }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...localFilters };
    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
    } else {
      updatedFilters[category].push(value);
    }
    setLocalFilters(updatedFilters);
  };

  const handleBooleanChange = (category) => {
    setLocalFilters({ ...localFilters, [category]: !localFilters[category] });
  };

  const handleRangeChange = (category, value) => {
    setLocalFilters({ ...localFilters, [category]: value });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-10/12 h-5/6 rounded-lg p-4 overflow-auto">
        <h2 className="text-xl mb-4">Filter Jobs</h2>
        {/* Add UI for each filter criterion */}
        {/* Example: Position Filter */}
        <div>
          <h3 className="text-lg mb-2">Position</h3>
          {["Technical Recruiter", "Software Engineer", "Project Manager"].map(position => (
            <label key={position} className="block">
              <input
                type="checkbox"
                checked={localFilters.positions.includes(position)}
                onChange={() => handleCheckboxChange('positions', position)}
              />
              {position}
            </label>
          ))}
        </div>
        {/* Add similar UI for other filters */}

        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onReset}>Reset Filters</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => onApply(localFilters)}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
