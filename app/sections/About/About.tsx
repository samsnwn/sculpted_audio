import AboutArticle from "./AboutArticle";
import AboutCard from "./AboutCard";
import { articles, cards } from "../../data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";

const About = () => {
  return (
    <section
      className="w-full"
      id="about"
    >
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <AltSubheadline className="text-white-100 text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-16 font-light">ABOUT US</AltSubheadline>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {cards.map((card, index) => (
            <AboutCard key={index} card={card} index={index}/>
          ))}
        </div>
        {/* <div className="flex flex-col space-y-10 pt-20">
          {articles.map((article, index) => (
            <AboutArticle key={index} article={article} index={index}/>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
