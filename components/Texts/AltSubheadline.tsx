import React from 'react';
import { prGrotesk } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';

interface AltSubheadlineProps {
  children: React.ReactNode;
  className?: string;
}

const AltSubheadline: React.FC<AltSubheadlineProps> = ({ children, className }) => {
  return (
    <h3 className={cn(
      'text-left font-normal leading-normal tracking-[-0.05em] normal-case',
      prGrotesk.className,
      className
    )}>
      {children}
    </h3>
  );
};

export default AltSubheadline;