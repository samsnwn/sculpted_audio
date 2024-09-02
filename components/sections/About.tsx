import { motion } from "framer-motion";
import AboutArticle from "../AboutArticle";

const articles = [
  {
    title: "Our essence",
    desc: "CRAFTING THE PERFECTION OF SOUND IN ITS PUREST FORM. WITH PRECISION AND ELEGANCE, CREATING SONIC EXPERIENCES THAT ELEVATE EVERY NOTE AND RHYTHM. COMMITTED TO EXCELLENCE, SCULPTING EACH PROJECT WITH METICULOUS AND TRANSPARENT FOCUS, REDEFINING THE STANDARDS OF QUALITY IN SOUND ENGINEERING.",
  },
  {
    title: "Our mission",
    desc: "RELIABILITY AND TRANSPARENCY. LISTENING TO EVERY DETAIL. THE ESSENTIAL PARTNER FOR ARTISTS, DJS, MUSICIANS, AND PRODUCERS; PROVIDING THE TOOLS AND EXPERTISE TO ACHIEVE THEIR HIGHEST SONIC EXPRESSION. EMPOWERING THEIR UNIQUE VISION WITHOUT IMPOSING LIMITS.",
  },
  {
    title: "Our vision",
    desc: "OBJECTIVITY, QUALITY, AND AN UNWAVERING COMMITMENT TO EXCELLENCE. THE PREMIER CHOICE FOR PERFECTING AND BRINGING SOUND TO LIFE, SETTING NEW STANDARDS WITH EVERY PROJECT. EDUCATING AND SHARING KNOWLEDGE, BENEFITING OUR CLIENTS AND THE INDUSTRY.",
  },
  {
    title: "Our people",
    desc: "FOR CREATORS WITH A UNIQUE VISION, TRUE COLLABORATORS EAGER TO ELEVATETHEIRCREATIONTOTHENEXT LEVEL ALONGSIDE PROFESSIONALS.",
  },
  {
    title: "Our approach",
    desc: "AT THE INTERSECTION OF SCULPTING AND AUDIO LIES A UNIQUE VISUAL UNIVERSE, NURTURED IN CRAFT, TECHNIQUE, PRECISION, AND VISION. THIS FUSION OF METICULOUS ARTISTRY AND TECHNICAL PROWESS CREATES COHESIVE VISUALS, REFLECTING A DEDICATION TO EXCELLENCE AND AN UNPARALLELED AESTHETIC.",
  },
];

const About = () => {
  return (
    <section
      className="flex flex-col h-full md:h-screen py-20 bg-black w-full px-2"
      id="about"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-10">
        About
      </h2>
      <div className="flex flex-col space-y-10">
        {articles.map((article, index) => (
          <AboutArticle key={index} article={article} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default About;
