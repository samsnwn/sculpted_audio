import * as React from "react"

import { cn } from "@/utils/cn"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        tabIndex={-1}
        className={cn(
          "flex min-h-[80px] rounded-none w-full border-y border-black bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
