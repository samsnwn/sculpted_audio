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
      key={index}
      ref={ref}
      initial={{
        x: 10,
        opacity: 0,
        y: 12,
        scale: 0.95,
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
