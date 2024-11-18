import { projects } from "@/app/data/data";
import ProjectCard from "./ProjectCard";
import { cn } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const Projects = () => {
  return (
    <section className="w-full" id="work">
      <SectionWrapper className="py-20">
      <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <div className="w-[90%] flex mx-auto justify-between items-center mb-16">
          <AltSubheadline className="font-light leading-tight">
            OUR WORK
          </AltSubheadline>
          <Numbers>
            [02]
          </Numbers>
        </div>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto">
            {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={index}/>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
