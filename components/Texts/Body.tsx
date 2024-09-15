import { gtPressura } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';
import React from 'react';
 
 interface BodyProps {
   children: React.ReactNode;
   className?: string;
 }
 
 const Body: React.FC<BodyProps> = ({ children, className }) => {
   return (
    <p className={cn(
      'text-left font-light leading-[1.12] tracking-[0] normal-case',
      gtPressura.className,
      className
    )}>
      {children}
    </p>
  ); 
};
export default Body;