"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Service = {
  title: string
  description: string
  icon: React.ReactNode
}

type ServiceItemProps = {
  service: Service
  index: number
  isLast: boolean
  totalServices: number
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index, isLast, totalServices }) => {
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

  const isLastInRow = isLast && totalServices % 3 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={controls}
      className={`h-full ${isLastInRow ? 'lg:h-auto' : ''}`}
    >
      <Card className={`bg-white text-black h-full flex flex-col`}>
        <CardHeader className="pb-2">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-red-500 bg-opacity-20 rounded-full">
              {service.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center text-black">
            {service.title}
          </h3>
        </CardHeader>
        <CardContent className="py-4 px-4 flex-grow flex flex-col justify-between">
          <p className="text-gray-700 text-center text-sm leading-relaxed">
            {service.description}
          </p>
          {isLast && (
            <div className={`mt-auto ${isLastInRow ? 'hidden lg:block' : 'hidden'} h-24 lg:h-0`}></div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceItem;
