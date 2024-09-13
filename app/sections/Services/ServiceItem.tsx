"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ServiceProps = {
  service: Service;
  index: number;
};

const ServiceItem: React.FC<ServiceProps> = ({ service, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        x: 10,
        opacity: 0,
        y: 12,
        scale: 0.95,
      }}
      animate={controls}
    >
      <Card
        key={index}
        className="bg-white border-gray-700 hover:bg-gray-750 transition-colors duration-300"
      >
        <CardHeader>
          <div className="flex justify-center">{service.icon}</div>
          <CardTitle className="text-xl font-semibold text-center">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center text-md">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceItem;
