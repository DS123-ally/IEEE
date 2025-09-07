import React from 'react';
import { EVENT_TYPES, EVENT_STATUS } from '../data/events';

const EventFilter = ({ activeType, activeStatus, onTypeChange, onStatusChange, resultsCount }) => {
  const typeFilters = [
    { key: 'all', label: 'All Events' },
    ...Object.entries(EVENT_TYPES).map(([key, value]) => ({ key, label: value.label }))
  ];

  const statusFilters = [
    { key: 'all', label: 'All Status' },
    ...Object.entries(EVENT_STATUS).map(([key, value]) => ({ key, label: value.label }))
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Event Type Filters */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Event Type</h3>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map(filter => (
                <button
                  key={filter.key}
                  className={`chip transition-all duration-200 ${
                    activeType === filter.key 
                      ? 'chip-active' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => onTypeChange(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Event Status Filters */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Status</h3>
            <div className="flex flex-wrap gap-2">
              {statusFilters.map(filter => (
                <button
                  key={filter.key}
                  className={`chip transition-all duration-200 ${
                    activeStatus === filter.key 
                      ? 'chip-active' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => onStatusChange(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center lg:text-right">
            <div className="text-2xl font-bold text-gray-900">{resultsCount}</div>
            <div className="text-sm text-gray-600">Event{resultsCount === 1 ? '' : 's'} Found</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilter;
