import React from 'react';

interface FlagIconProps {
  country: 'IN' | 'PH';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FlagIcon: React.FC<FlagIconProps> = ({ country, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-5 h-3.5',
    md: 'w-7 h-5',
    lg: 'w-8 h-6',
  };

  if (country === 'IN') {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded shadow-sm border border-white/20 shrink-0 select-none ${sizeClasses[size]} ${className}`}
        title="India"
        aria-label="India flag"
      >
        <svg viewBox="0 0 24 16" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="24" height="5.33" fill="#FF9933" />
          <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
          <rect y="10.66" width="24" height="5.33" fill="#138808" />
          <circle cx="12" cy="8" r="2.2" stroke="#000080" strokeWidth="0.8" fill="none" />
          <circle cx="12" cy="8" r="0.5" fill="#000080" />
        </svg>
      </span>
    );
  }

  if (country === 'PH') {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded shadow-sm border border-white/20 shrink-0 select-none ${sizeClasses[size]} ${className}`}
        title="Philippines"
        aria-label="Philippines flag"
      >
        <svg viewBox="0 0 24 16" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="24" height="8" fill="#0038A8" />
          <rect y="8" width="24" height="8" fill="#CE1126" />
          <polygon points="0,0 12,8 0,16" fill="#FFFFFF" />
          <circle cx="4.2" cy="8" r="1.4" fill="#FCD116" />
        </svg>
      </span>
    );
  }

  return null;
};
