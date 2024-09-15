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
    <motion.article
      key={index}
      ref={ref}
      initial={{ 
        opacity: 0,
        y: 50,
        scale: 0.9,
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
