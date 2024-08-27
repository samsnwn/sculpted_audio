import React from "react";

const sections = [
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
      className="flex flex-col h-full py-10 bg-black w-full px-2 gap-5"
      id="about"
    >
      {sections.map((section) => (
        <article key={section.title}>
          <div className="w-3 h-0.5 bg-red border border-red" />
          <div className="w-0.5 bg-red h-2 border border-red" />
          <h2 className="text-red text-m ml-3 md:items-start">
            {section.title}
          </h2>
          <h3 className="text-white text-m">{section.desc}</h3>
        </article>
      ))}
    </section>
  );
};

export default About;
