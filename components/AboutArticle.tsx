"use client";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Article = {
  title: string;
  desc: string;
};

type ArticleProps = {
  article: Article;
  index: number;
};

const AboutArticle: React.FC<ArticleProps> = ({ article, index }) => {
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
          ease: "easeOut"
        }
      });
    }
  }, [controls, inView]);

  return (
    <motion.article
      key={index}
      ref={ref}
      initial={{ 
        x: index % 2 === 0 ? -30 : 10,
        opacity: 0,
        y: 15,    // Subtle vertical movement
        scale: 0.95, // Slight scaling 
       }}
      animate={controls}
      className={""}
    >
      <div className="w-3 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-2 border border-red" />
      <h3 className="text-red text-m ml-3 md:items-start">{article.title}</h3>
      <p className="text-white text-m">{article.desc}</p>
    </motion.article>
  );
};

export default AboutArticle;
