"use client"

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import ScrollWrapper from "@/components/ScrollWrapper";
import { Client } from "@/app/types";

type ClientProps = {
  client: Client;
  index: number;
};

const ClientCard: React.FC<ClientProps> = ({ client, index }) => {
  return (
    <ScrollWrapper index={index}>
      <Card className="bg-black/30 text-white h-full flex flex-col w-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl border border-gray-600 max-w-sm mx-auto">
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
            <div className="font-bold text-sm sm:text-lg">{client.name}</div>
            <div className="text-xs sm:text-sm opacity-70">{client.labels}</div>
          </div>
        </CardContent>
      </Card>
    </ScrollWrapper>
  );
};

export default ClientCard;
