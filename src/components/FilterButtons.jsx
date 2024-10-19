import React from 'react';

const FilterButtons = ({ onSelect }) => {
  const filters = ['nature', 'birds', 'cats', 'shoes'];

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-4">
      {filters.map((filter) => (
        <div
          key={filter}
          className="bg-primary text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
          onClick={() => onSelect(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default FilterButtons;
