import React from 'react';
import { GROUP_LABELS } from '../data/members';

const FilterToolbar = ({ activeFilter, onFilterChange, resultsCount }) => {
  const filters = [
    { key: 'featured', label: 'Featured' },
    { key: 'all', label: 'All' },
    ...Object.entries(GROUP_LABELS).map(([key, label]) => ({ key, label }))
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`chip transition-all duration-200 ${
                activeFilter === filter.key 
                  ? 'chip-active' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-600 font-medium">
          {resultsCount} member{resultsCount === 1 ? '' : 's'}
        </div>
      </div>
    </section>
  );
};

export default FilterToolbar;
