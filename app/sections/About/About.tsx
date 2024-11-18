import AboutCard from "./AboutCard";
import { cards } from "../../data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <section
      className="w-full min-h-screen"
      id="about"
    >
      <SectionWrapper className="py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <div className="w-[90%] flex mx-auto justify-between md:items-center mb-16">
          <Numbers>
            [03]
          </Numbers>
          <AltSubheadline className="font-light leading-tight">
            ABOUT US
          </AltSubheadline>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {cards.map((card, index) => (
            <AboutCard key={index} card={card} index={index} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
