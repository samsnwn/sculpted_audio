"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import Dani from "@/public/images/Human/Raw/slugos.jpg";
import Enol from "@/public/images/Human/Portrait-3.png";
import ScrollWrapper from "@/components/ScrollWrapper";

type Card = {
  name: string;
  content: string;
};

type CardProps = {
  card: Card;
  index: number;
};

const AboutCard: React.FC<CardProps> = ({ card, index }) => {
  return (
    <ScrollWrapper index={index} className="w-[98%]">
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
      </Card>
    </ScrollWrapper>
  );
};

export default AboutCard;
