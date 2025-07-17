import React from 'react';
import LiquidGlass from 'liquid-glass-react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  noPadding = false
}) => {
  return (
    <LiquidGlass
      className={className}
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: noPadding ? '0' : '1.5rem',
        borderRadius: 'inherit',
      }}
    >
      {children}
    </LiquidGlass>
  );
};

export default GlassCard;
