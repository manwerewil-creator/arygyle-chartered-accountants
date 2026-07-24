import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Brand logo — uses the official Arygyle lockup (navy + silver, transparent PNG).
 * The artwork is navy, so on dark surfaces (`light`) it sits on a white chip
 * to stay legible; on light surfaces it renders directly.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', light = false, size = 'md' }) => {
  const h = size === 'sm' ? 'h-11' : size === 'lg' ? 'h-20' : 'h-14';

  const img = (
    <img
      src="/logo.png"
      alt="Arygyle Chartered Accountants"
      className={`${h} w-auto object-contain transition-transform duration-300 hover:scale-105`}
    />
  );

  if (light) {
    return (
      <span className={`inline-flex items-center justify-center bg-white rounded-xl px-3 py-2 shadow-sm ${className}`}>
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center select-none ${className}`}>{img}</span>;
};
