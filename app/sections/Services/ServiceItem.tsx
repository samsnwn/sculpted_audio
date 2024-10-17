"use client";

import * as React from "react";
import { Mic, Headphones, Music, Users } from "lucide-react";
import Body from "@/components/Texts/Body";
import ScrollWrapper from "@/components/ScrollWrapper";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isOpen, setIsOpen] = React.useState(true);

  const IconComponent = () => {
    switch (service.icon) {
      case "Mic":
        return <Mic className="h-6 w-6 text-red" />;
      case "Music":
        return <Music className="h-6 w-6 text-red" />;
      case "Headphones":
        return <Headphones className="h-6 w-6 text-red" />;
      case "Users":
        return <Users className="h-6 w-6 text-red" />;
      default:
        return null;
    }
  };

  return (
    <ScrollWrapper index={index}>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger
            className="w-full text-white flex items-center justify-between p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center">
              <IconComponent />
              <h3 className="text-xl ml-3 font-thin">{service.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-red" />
            </motion.div>
          </Accordion.Trigger>
          <AnimatePresence initial={false}>
            {isOpen && (
              <Accordion.Content forceMount>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-700 rounded-lg mt-2">
                    <Body className="text-gray-300 text-base">{service.description}</Body>
                  </div>
                </motion.div>
              </Accordion.Content>
            )}
          </AnimatePresence>
        </Accordion.Item>
      </Accordion.Root>
    </ScrollWrapper>
  )
}

export default ServiceItem;