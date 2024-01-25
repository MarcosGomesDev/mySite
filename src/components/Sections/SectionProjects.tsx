"use client";
import { Element } from "react-scroll";
import { ProjectCard } from "../ProjectCard";
import { projectsArray } from "./projects";

export function SectionProjects() {
  return (
    <Element name='projects' className='element'>
      <section className='flex w-full min-h-[704px] justify-center  pt-4'>
        <div className='w-full container py-20 mx-auto flex justify-center items-start'>
          <div className='text-center flex flex-col'>
            <h3 className='text-5xl font-bold'>Projetos</h3>
            <p className='mt-6 text-3xl font-light text-gray-200'>
              Projetos feitos recentemente
            </p>
            <div className='mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 lg:px-0'>
              {projectsArray.map((project) => (
                <ProjectCard
                  code={project.github}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  name={project.name}
                  technologies={project.techs}
                  key={project.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
