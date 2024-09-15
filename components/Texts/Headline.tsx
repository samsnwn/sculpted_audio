 import { gtPressuraMono } from '@/app/styles/fonts';
import { cn } from '@/utils/cn';
import React from 'react';
 
 interface HeadlineProps {
  children: React.ReactNode;
   className?: string;
 }
 
 const Headline: React.FC<HeadlineProps> = ({ children, className }) => {
   return (
     <h1 className={cn('font-normal uppercase leading-[0.92] tracking-[-0.05em] text-left', className, gtPressuraMono.className)}>{children}</h1>
  ); 
};
export default Headline;