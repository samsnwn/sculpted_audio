import { cn } from '@/utils/cn';
import React from 'react'

type Props = {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<Props> = ({children, className}) => {
  return (
    <div className={cn('w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-6', className)}>{children}</div>
  )
}

export default SectionWrapper