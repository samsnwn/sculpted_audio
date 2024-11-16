import { projects } from "@/app/data/data";
import ProjectCard from "./ProjectCard";
import { cn } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const Projects = () => {
  return (
    <section className="w-full" id="clients">
      <SectionWrapper className="py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <div className="w-[90%] flex mx-auto justify-between md:items-center mb-16">
          <Numbers>
            [03]
          </Numbers>
          <AltSubheadline className="font-light leading-tight">
            PROJECTS
          </AltSubheadline>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mx-auto md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                index === 2 && projects.length === 4 ? "sm:col-span-1 lg:col-span-1" :
                index === 2 && "sm:col-span-2 lg:col-span-1",
                index > 2 && "sm:col-span-1"
              )}
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
