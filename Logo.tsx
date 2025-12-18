
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-24 h-24 sm:w-32 sm:h-32 bg-unio-gradient flex items-center justify-center overflow-hidden ${className}`}>
      <span className="font-script text-white text-3xl sm:text-4xl -rotate-12 select-none">
        Unio
      </span>
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
    </div>
  );
};

export default Logo;
