'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image';
import ScrollWrapper from '@/components/ScrollWrapper';
import { Project } from '@/app/types';
import Link from 'next/link';

type ProjectProps = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <ScrollWrapper index={index}>
      <Card
        className="relative overflow-hidden cursor-pointer group mx-auto max-w-[75%] md:max-w-[85%] lg:max-w-[90%] lg:max-h-[425px] xl:max-h-[400px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={1000}
          className='w-full h-full object-fill'
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
            className="absolute inset-0 bg-black bg-opacity-75 sm:pt-4 md:px-6 px-2 flex flex-col justify-center text-white"
            aria-hidden={!isHovering}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-center items-center text-center text-lg">
                {project.name}
              </div>
            </CardHeader>
            <CardContent className="px-3 sm:px-4 text-center">
              <blockquote className="text-silver text-center md:text-base text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">{project.content2}</blockquote>
              <blockquote className="text-silver text-center md:text-lg text-sm sm:text-base leading-relaxed mb-2 sm:mb-4">{project.content}</blockquote>
              <div className="text-center mt-4">
                <Link className="text-base opacity-70 text-center" href={project.link} target="_blank">{project.link}</Link>
              </div>
            </CardContent>
          </div>
        </Transition>
        {/* <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent opacity-70" /> */}
      </Card>
    </ScrollWrapper>
  )
}

export default ProjectCard;
