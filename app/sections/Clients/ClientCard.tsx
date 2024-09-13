"use client"

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Client = {
  name: string;
  content: string;
  labels: string
};

type ClientProps = {
  client: Client;
  index: number;
};

const ClientCard: React.FC<ClientProps> = ({ client, index }) => {
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
    animate={controls}>

      <Card className="w-[350px] bg-black text-white">
        <CardContent className="pt-6 pb-6 px-6">
          <QuoteIcon className="h-8 w-8 mb-4 opacity-70 text-red" />
          <blockquote className="text-lg mb-4 text-silver">{client.content}</blockquote>
          <div className="flex items-center">
            <div>
              <div className="font-bold text-2xl">{client.name}</div>
              <div className="text-sm opacity-70">{client.labels}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClientCard;
