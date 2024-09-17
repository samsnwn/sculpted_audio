"use client"

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type Client = {
  name: string;
  content: string;
  labels: string
  image: string;
};

type ClientProps = {
  client: Client;
  index: number;
};

const ClientCard: React.FC<ClientProps> = ({ client, index }) => {
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
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={controls}
      className="w-full" // Add this line
    >
      <Card className="bg-black/30 text-white h-full flex flex-col w-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border border-gray-600 max-w-sm mx-auto">
        <CardHeader className="pb-2">
          <div className="flex justify-center mb-3">
            {/* <Image src={client.image} alt={client.image} width={100} height={100}/> */}
            <div className="p-3 bg-red-500 bg-opacity-20 rounded-full">
              <QuoteIcon className="h-8 w-8 text-red" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-4 px-4">
          <blockquote className="text-silver text-center text-sm leading-relaxed mb-4">{client.content}</blockquote>
          <div className="text-center">
            <div className="font-bold text-lg">{client.name}</div>
            <div className="text-sm opacity-70">{client.labels}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClientCard;
