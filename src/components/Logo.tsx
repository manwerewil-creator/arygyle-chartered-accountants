import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false, size = 'md' }) => {
  const scale = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14' : 'h-10';
  
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Angular "A" Mountain Mark with sweeping arc */}
      <svg
        viewBox="0 0 100 100"
        className={`${scale} w-auto flex-shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Navy Mountain A */}
        <path
          d="M50 10 L88 85 H70 L50 42 L30 85 H12 L50 10 Z"
          fill={light ? '#FFFFFF' : '#0D1240'}
        />
        {/* Gold/Amber sweeping arc through the A */}
        <path
          d="M15 62 Q 50 35, 85 52 Q 50 48, 15 62 Z"
          fill="#F2A93B"
        />
        {/* Crossbar element in mountain */}
        <polygon points="38,62 62,62 50,40" fill={light ? '#0A0E2E' : '#FFFFFF'} opacity="0.3" />
      </svg>

      <div className="flex flex-col justify-center">
        {/* Top Horizontal Rule */}
        <div className={`h-[1px] w-full ${light ? 'bg-gray-500/40' : 'bg-gray-300'}`} />
        
        {/* Main Wordmark */}
        <span
          className={`font-bold tracking-[0.2em] uppercase font-sans text-lg sm:text-xl leading-tight ${
            light ? 'text-white' : 'text-navy-deep'
          }`}
        >
          ARYGYLE
        </span>
        
        {/* Subtitle */}
        <span
          className={`text-[9px] sm:text-[10.5px] font-medium tracking-[0.15em] uppercase font-serif ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          CHARTERED ACCOUNTANTS
        </span>

        {/* Bottom Horizontal Rule */}
        <div className={`h-[1px] w-full ${light ? 'bg-gray-500/40' : 'bg-gray-300'}`} />
      </div>
    </div>
  );
};
