"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import ScrollWrapper from "@/components/ScrollWrapper";

type Faq = {
  question: string;
  answer: string;
}

type FaqProps = {
  faq: Faq;
  index: number;
}

const FaqItem: React.FC<FaqProps> = ({ faq, index }) => {
  return (
    <ScrollWrapper index={index}>
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{faq.question}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    </ScrollWrapper>
  );
};

export default FaqItem;
