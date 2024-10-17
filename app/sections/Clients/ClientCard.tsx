'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image';
import { QuoteIcon } from 'lucide-react';
import ScrollWrapper from '@/components/ScrollWrapper';
import { Client } from '@/app/types';

type ClientProps = {
  client: Client;
  index: number;
};

const ClientCard: React.FC<ClientProps> = ({ client, index }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <ScrollWrapper index={index}>
      <Card
        className="relative h-full w-full overflow-hidden cursor-pointer group max-w-sm mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={client.image}
          alt={client.name}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
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
          {index % 2 != 0 ? (
            <div
              className="absolute inset-0 bg-black bg-opacity-75 p-4 pt-10 sm:pt-4 flex flex-col justify-center text-white"
              aria-hidden={!isHovering}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-center items-center">
                </div>
              </CardHeader>
              <CardContent className=" px-3 sm:px-4">
                <blockquote className="text-silver text-center md:text-lg text-sm sm:text-md leading-relaxed mb-2 sm:mb-4">{client.content}</blockquote>
                <div className="text-center">
                  <div className="text-xs sm:text-sm opacity-70">{client.labels}</div>
                </div>
              </CardContent>
            </div>
          ) : (<div
            className="absolute inset-0 bg-black bg-opacity-75 p-4 pt-10 sm:pt-4 flex flex-col justify-center text-white"
            aria-hidden={!isHovering}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-center items-center">
                <div className="bg-red-500 bg-opacity-20 rounded-full">
                  <QuoteIcon className="h-4 w-4 sm:h-6 sm:w-6 text-red" />
                </div>
              </div>
            </CardHeader>
            <CardContent className=" px-3 sm:px-4">
              <blockquote className="text-silver text-center md:text-lg text-sm sm:text-md leading-relaxed mb-2 sm:mb-4">{client.content}</blockquote>
              <div className="text-center">
                <div className="text-xs sm:text-sm opacity-70">{client.labels}</div>
              </div>
            </CardContent>
          </div>)}

        </Transition>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent opacity-70" />
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">{client.name}</h3>
      </Card>
    </ScrollWrapper>
  )
}

export default ClientCard;
