import React from 'react';

const MemberCard = ({ member }) => {
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/220x220/2563eb/ffffff?text=${member.name.charAt(0)}`;
  };

  return (
    <article className="card p-6 text-center group">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg group-hover:border-brand-300 transition-colors">
          <img 
            src={member.img} 
            alt={`Portrait of ${member.name}`}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-brand-600 font-semibold text-sm mb-2">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio || ''}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {member.links?.email && (
          <a 
            href={`mailto:${member.links.email}`} 
            className="chip text-xs px-3 py-1 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700"
          >
            Email
          </a>
        )}
        {member.links?.linkedin && (
          <a 
            href={member.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="chip text-xs px-3 py-1 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700"
          >
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
};

export default MemberCard;
