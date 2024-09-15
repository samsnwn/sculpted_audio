import { gtPressura } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';
import React from 'react';
 
 interface SubheadlineProps {
   children: React.ReactNode;
   className?: string;
 }
 
 const Subheadline: React.FC<SubheadlineProps> = ({ children, className }) => {
   return (
     <h2 className={cn('text-left font-normal leading-[1.01] tracking-[0] normal-case', className, gtPressura.className)}>{children}</h2>
  ); 
};
export default Subheadline;