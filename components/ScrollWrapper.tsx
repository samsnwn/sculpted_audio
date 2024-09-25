import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/utils/cn";

type Props = {
  children:  React.ReactNode;
  index: number; 
  className?: string;
}

const ScrollWrapper :  React.FC<Props> = ({ children, index, className }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        },
      })
    }
  }, [controls, inView, index])

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={controls}
      className={cn(className)}
      >
      {children}
    </motion.div>
  )
}

export default ScrollWrapper