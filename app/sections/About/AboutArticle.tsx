"use client";

import React from "react";
import ScrollWrapper from "@/components/ScrollWrapper";

type Article = {
  title: string;
  desc: string;
};

type ArticleProps = {
  article: Article;
  index: number;
};

const AboutArticle: React.FC<ArticleProps> = ({ article, index }) => {
  return (
    <ScrollWrapper index={index}>
      <div className="w-3 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-2 border border-red" />
      <h3 className="text-red text-m ml-3 md:items-start">{article.title}</h3>
      <p className="text-white text-m">{article.desc}</p>
    </ScrollWrapper>
  );
};

export default AboutArticle;
