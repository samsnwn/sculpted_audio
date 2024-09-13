"use client";

import AboutArticle from "../../components/AboutArticle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Dani from "@/public/images/Human/Raw/slugos.jpg";
import Enol from "@/public/images/Human/Portrait-3.png";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
    <section
      className="flex flex-col h-full h-full py-20 bg-black w-full px-2"
      id="about"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-10">
        About
      </h2>

      <div className="flex flex-col lg:flex-row items-center m-auto lg:gap-10 gap-5">
        <motion.div
          ref={ref}
          initial={{
            x: 10,
            opacity: 0,
            y: 12,
            scale: 0.95,
          }}
          animate={controls}
          className="w-[90%]"
        >
          <Card className="overflow-hidden max-w-[900px] lg:max-w-[850px]">
            <Image
              src={Dani}
              alt="Card image"
              className="w-full h-[200px] object-cover"
            />
            <CardHeader>
              <CardTitle>Daniel Tébar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Daniel Tébar has built an extensive career as a producer since
                2008, driven by his passion for achieving the best possible
                sound. In 2019, he began offering his services as an independent
                mixing and mastering engineer, bringing his refined skills and
                experience to the work of other artists. As a mastering
                engineer, he is known for his role as the mastering engineer for
                the Caedite Eos label, as well as his ongoing work with Room
                Trax. Since 2024, Daniel has further specialized in vinyl
                mastering and lacquer cutting, solidifying his reputation in the
                industry as an expert in delivering exceptional sound quality
                across all formats.
              </CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{
            x: 10,
            opacity: 0,
            y: 12,
            scale: 0.95,
          }}
          animate={controls}
          className="w-[90%]"
        >
          <Card className="overflow-hidden max-w-[900px] lg:max-w-[850px]">
            <Image
              src={Enol}
              alt="Card image"
              className="w-full h-[200px] object-cover"
            />
            <CardHeader>
              <CardTitle>Enol Balado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enol's journey in the audio world began around 2008 when he and
                his friends purchased their first condenser microphone and sound
                card to record songs using the free software Audacity. His
                passion for music and sound led him to study at CES and TAI
                schools in Madrid (2013-2018). Enol's early career included
                working as an audio editor for television series in 2015 and
                developing his electronic music project, natif.orchestra. His
                experience in live sound, particularly in Barcelona, involved
                working for festivals such as Sónar and Pride BCN. Currently
                based in Berlin, Enol, along with his partner Dani Tébar, has
                founded Sculpted Audio—a mixing and mastering studio
                specializing in electronic music. The studio also offers sound
                design services for video games, cinema, and advertising.
              </CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </motion.div>
      </div>
      <div className="flex flex-col space-y-10 pt-20 px-10">
        {articles.map((article, index) => (
          <AboutArticle key={index} article={article} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
