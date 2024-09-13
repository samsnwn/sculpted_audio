import AboutArticle from "./AboutArticle";
import AboutCard from "./AboutCard";
import { articles, cards } from "../../data/data";

const About = () => {

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

      <div className="flex flex-col lg:flex-row items-center m-auto justify-center gap-5">
        {cards.map((card, index) => (
          <AboutCard key={index} card={card} index={index}/>
        ))}
      </div>
      <div className="flex flex-col space-y-10 pt-20 px-3">
        {articles.map((article, index) => (
          <AboutArticle key={index} article={article} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default About;
