import React from 'react';

const NukaazoText = ({ className = '', style = {} }) => {
  return (
    <span 
      className={`font-logo tracking-tight leading-none inline-flex items-center ${className}`} 
      style={{ fontFamily: 'var(--font-logo), var(--theme-font-family-logo), sans-serif', ...style }}
    >
      <span style={{ color: 'var(--theme-primary)' }}>Nukaa</span>
      <span style={{ color: 'var(--theme-secondary)' }}>zo</span>
    </span>
  );
};

export default NukaazoText;
