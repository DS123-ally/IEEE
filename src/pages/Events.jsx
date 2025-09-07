import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import { EVENTS } from '../data/events';

const Events = () => {
  const [activeType, setActiveType] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on active filters and search query
  const filteredEvents = useMemo(() => {
    return EVENTS.filter(event => {
      // Filter by type
      const typeMatch = activeType === 'all' || event.type === activeType;
      
      // Filter by status
      const statusMatch = activeStatus === 'all' || event.status === activeStatus;
      
      // Filter by search query
      const searchText = (event.title + ' ' + event.description + ' ' + (event.tags || []).join(' ')).toLowerCase();
      const queryMatch = searchQuery === '' || searchText.includes(searchQuery.toLowerCase());

      return typeMatch && statusMatch && queryMatch;
    });
  }, [activeType, activeStatus, searchQuery]);

  // Group events by status for better organization
  const groupedEvents = useMemo(() => {
    const groups = {
      upcoming: [],
      ongoing: [],
      completed: []
    };

    filteredEvents.forEach(event => {
      if (groups[event.status]) {
        groups[event.status].push(event);
      }
    });

    return groups;
  }, [filteredEvents]);

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="IEEE Events" 
        tagline="Join our exciting events, workshops, and conferences. Learn, network, and grow with the IEEE community."
        showButtons={false}
      />

      {/* Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search events by title, description, or tags..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-600"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </section>

      <EventFilter 
        activeType={activeType}
        activeStatus={activeStatus}
        onTypeChange={handleTypeChange}
        onStatusChange={handleStatusChange}
        resultsCount={filteredEvents.length}
      />

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Upcoming Events */}
            {groupedEvents.upcoming.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedEvents.upcoming.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* Ongoing Events */}
            {groupedEvents.ongoing.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Ongoing Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedEvents.ongoing.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* Completed Events */}
            {groupedEvents.completed.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                  Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedEvents.completed.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Organize an Event?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have an idea for an event? We'd love to hear from you and help make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn btn-primary text-lg px-8 py-3"
              >
                Contact Us
              </a>
              <a 
                href="https://forms.gle/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn text-lg px-8 py-3"
              >
                Propose Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
