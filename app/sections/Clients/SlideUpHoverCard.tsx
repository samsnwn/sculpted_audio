'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image';
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { QuoteIcon } from 'lucide-react';

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
  const [isHovering, setIsHovering] = useState(false)

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
      className="w-full">

      <Card
        className="relative h-full w-full overflow-hidden cursor-pointer group max-w-sm mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={client.image}
          alt="Card image"
          className="w-full h-full object-cover"
          width={150}
          height={150}
        />
        <Transition
          show={isHovering}
          enter="transition-all duration-300 ease-out"
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-300 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-75 p-4 flex flex-col justify-center items-center text-white"
            aria-hidden={!isHovering}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-500 bg-opacity-20 rounded-full">
                  <QuoteIcon className="h-6 w-6 sm:h-8 sm:w-8 text-red" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-2 px-3 sm:py-4 sm:px-4">
              <blockquote className="text-silver text-center text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">{client.content}</blockquote>
              <div className="text-center">
                <div className="text-xs sm:text-sm opacity-70">{client.labels}</div>
              </div>
            </CardContent>
            {/* <p className="text-sm text-center">
            This content slides up when you hover over the card.
            </p> */}
          </div>
        </Transition>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent opacity-70" />
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">{client.name}</h3>
      </Card>
    </motion.div>
  )
}

export default ClientCard;
