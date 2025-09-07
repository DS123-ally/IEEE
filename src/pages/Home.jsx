import React, { useState, useEffect, useMemo } from 'react';
import Hero from '../components/Hero';
import FilterToolbar from '../components/FilterToolbar';
import MemberGroup from '../components/MemberGroup';
import { MEMBERS, GROUP_ORDER, GROUP_LABELS } from '../data/members';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Get search query from URL or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    setSearchQuery(query);
  }, []);

  // Filter members based on active filter and search query
  const filteredMembers = useMemo(() => {
    return MEMBERS.filter(member => {
      // Filter by group
      let groupMatch = false;
      if (activeFilter === 'featured') {
        groupMatch = member.group === 'chairperson' || member.group === 'vice_chair';
      } else if (activeFilter === 'all') {
        groupMatch = true;
      } else {
        groupMatch = member.group === activeFilter;
      }

      // Filter by search query
      const searchText = (member.name + ' ' + member.role + ' ' + (member.tags || []).join(' ')).toLowerCase();
      const queryMatch = searchQuery === '' || searchText.includes(searchQuery.toLowerCase());

      return groupMatch && queryMatch;
    });
  }, [activeFilter, searchQuery]);

  // Group members for display
  const groupedMembers = useMemo(() => {
    if (activeFilter === 'all') {
      return { 'All Members': filteredMembers };
    }

    const groups = {};
    GROUP_ORDER.forEach(groupKey => {
      const groupMembers = filteredMembers.filter(member => member.group === groupKey);
      if (groupMembers.length > 0) {
        groups[GROUP_LABELS[groupKey]] = groupMembers;
      }
    });

    return groups;
  }, [filteredMembers, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="IEEE Committee" 
        tagline="Uniting Ideas, Building Futures."
        showButtons={true}
      />

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About the Committee
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We organize technical initiatives, events, and community programs to empower learners and innovators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-600">
              Inspire innovation and leadership through technology and collaboration.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
            <p className="text-gray-600">
              Create inclusive opportunities for hands-on learning and impactful projects.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Values</h3>
            <p className="text-gray-600">
              Community, curiosity, integrity, and a passion for open knowledge.
            </p>
          </div>
        </div>
      </section>

      <FilterToolbar 
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        resultsCount={filteredMembers.length}
      />

      {/* Members Section */}
      <section id="members" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Members
        </h2>
        
        <div className="space-y-8">
          {Object.entries(groupedMembers).map(([groupName, members]) => (
            <MemberGroup
              key={groupName}
              title={groupName}
              members={members}
              isHorizontal={activeFilter === 'all'}
            />
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Want to be part of our committee?
            </p>
            <a 
              href="https://forms.gle/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-3 mb-6"
            >
              Apply Now
            </a>
            
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                📸
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                💼
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                🐦
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                ✉️
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
