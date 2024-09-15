"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Mic, Headphones, Music, Users } from "lucide-react";
import Body from "@/components/Texts/Body";

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

  const isLastInRow = isLast && totalServices % 2 !== 0;

  const IconComponent = () => {
    switch (service.icon) {
      case "Mic":
        return <Mic className="h-8 w-8 text-red" />;
      case "Music":
        return <Music className="h-8 w-8 text-red" />;
      case "Headphones":
        return <Headphones className="h-8 w-8 text-red" />;
      case "Users":
        return <Users className="h-8 w-8 text-red" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={controls}
    >
      <Card className="bg-gray-800/10 text-white h-full flex flex-col w-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border border-gray-600 text-center">
        <CardHeader className="pb-2">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-red-500 bg-opacity-20 rounded-full">
              <IconComponent />
            </div>
          </div>
          <h3 className="text-lg font-semibold">
            {service.title}
          </h3>
        </CardHeader>
        <CardContent className="py-4 px-2 sm:px-4 flex-grow flex flex-col justify-between">
            <Body className="text-gray-300 text-sm">{service.description}</Body>
          {isLast && isLastInRow && (
            <div className="mt-auto hidden md:block h-24" />
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceItem;
