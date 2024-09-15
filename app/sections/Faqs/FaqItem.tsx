"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Faq = {
  question: string;
  answer: string;
}

type FaqProps = {
  faq: Faq;
  index: number;
}

const FaqItem : React.FC<FaqProps> = ({faq, index}) => {
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
    >
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{faq.question}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default FaqItem;
