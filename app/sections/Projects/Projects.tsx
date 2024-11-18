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
        <div className="flex flex-col md:flex-row w-full mx-auto gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className=""
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
