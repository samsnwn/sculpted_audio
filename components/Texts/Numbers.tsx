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
      'text-left leading-[1.01] tracking-[0] normal-case',
      bold ? 'font-bold' : 'font-light',
      gtPressuraMono.className,
      className
    )}>
      {children}
    </span>
  );
};

export default Numbers;