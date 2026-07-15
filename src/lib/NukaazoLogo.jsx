import React from 'react';

export default function NukaazoLogo({ width = 48, height = 48, fill = "#ffffff" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="icon-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="0" dy="6" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="56" y="56" width="400" height="400" rx="90" fill={fill} />
      
      <g transform="translate(156, 132)">
        {/* Teal Basket Handle */}
        <path 
          d="M30 40 C 30 -20, 170 -20, 170 40" 
          stroke="var(--theme-secondary)" 
          strokeWidth="32" 
          fill="none" 
          strokeLinecap="round"
        />

        {/* Orange Basket Base */}
        <path 
          d="M30 95 V 260 M30 95 L 170 260 M170 95 V 260" 
          stroke="var(--theme-primary)" 
          strokeWidth="55" 
          fill="none" 
          strokeLinejoin="round" 
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
