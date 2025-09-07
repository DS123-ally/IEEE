import React from 'react';
import MemberCard from './MemberCard';

const MemberGroup = ({ title, members, isHorizontal = false }) => {
  return (
    <section className="mb-8">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <div className={`p-6 ${isHorizontal ? 'flex overflow-x-auto space-x-6 pb-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
          {members.map((member, index) => (
            <div key={`${member.name}-${index}`} className={isHorizontal ? 'flex-shrink-0 w-80' : ''}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberGroup;
