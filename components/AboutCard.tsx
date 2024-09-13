"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAnimation, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Dani from "@/public/images/Human/Raw/slugos.jpg";
import Enol from "@/public/images/Human/Portrait-3.png";

type Card = {
  name: string;
  content: string;
};

type CardProps = {
  card: Card;
  index: number;
};

const AboutCard: React.FC<CardProps> = ({ card, index }) => {
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
      className="w-[95%]"
    >
      <Card className="overflow-hidden max-w-[800px] lg:max-w-[800px]">
        <Image
          src={index === 0 ? Dani : Enol}
          alt="Card image"
          className="w-full h-[200px] object-cover"
        />
        <CardHeader>
          <CardTitle>{card.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{card.content}</CardDescription>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
};

export default AboutCard;
