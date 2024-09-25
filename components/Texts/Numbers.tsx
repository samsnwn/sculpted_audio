import React from 'react';
import { gtPressuraMono } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';

interface NumbersProps {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
}

const Numbers: React.FC<NumbersProps> = ({ children, className, bold = false }) => {
  return (
    <span className={cn(
      'text-left leading-[1.01] tracking-[0] normal-case text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-0',
      bold ? 'font-bold' : 'font-light',
      gtPressuraMono.className,
      className
    )}>
      {children}
    </span>
  );
};

export default Numbers;