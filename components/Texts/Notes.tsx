import React from 'react';
import { prGrotesk } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';

interface NotesProps {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  uppercase?: boolean;
}

const Notes: React.FC<NotesProps> = ({ children, className, bold = false, uppercase = false }) => {
  return (
    <p className={cn(
      'text-left leading-[1.1] tracking-[0.2em]',
      bold ? 'font-bold' : 'font-light',
      uppercase ? 'uppercase' : 'normal-case',
      prGrotesk.className,
      className
    )}>
      {children}
    </p>
  );
};

export default Notes;