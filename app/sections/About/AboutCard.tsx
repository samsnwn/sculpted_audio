"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import Dani from "@/public/Pics/slugos.jpg";
import Enol from "@/public/Pics/P1055290-bw (1).jpg";
import ScrollWrapper from "@/components/ScrollWrapper";
import { AboutCardProps } from "@/app/types";

type CardProps = {
  card: AboutCardProps;
  index: number;
};

const AboutCard: React.FC<CardProps> = ({ card, index }) => {
  return (
    <ScrollWrapper index={index} className="w-[98%]">
      <Card className="overflow-hidden max-w-[800px] lg:max-w-[800px]">
        <Image
          src={index === 0 ? Dani : Enol}
          alt={card.name}
          className="w-full h-[200px] object-cover"
        />
        <CardHeader>
          <CardTitle>{card.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{card.content}</CardDescription>
        </CardContent>
      </Card>
    </ScrollWrapper>
  );
};

export default AboutCard;
