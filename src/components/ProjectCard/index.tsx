import Image, { StaticImageData } from "next/image";
import File from "../../../public/site-mario.png";
import Link from "next/link";
import { ArrowUpRightFromSquare, Github } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  code: string;
  image: StaticImageData;
}

export function ProjectCard({
  name,
  description,
  image,
  technologies,
  link,
  code,
}: ProjectCardProps) {
  return (
    <div className='md:w-80 h-[34rem] bg-white dark:bg-[#363636] rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]'>
      <Image
        src={image}
        alt='hero'
        className='w-full h-auto rounded-t-xl border-b-2 border-opacity-30 border-gray'
      />
      <div className='px-4 flex flex-col items-center h-full gap-7  text-gray dark:text-[#ccc]'>
        <p className='text-2xl mt-6 font-medium !text-black dark:!text-[#ccc]'>
          {name}
        </p>
        <p className='text-base leading-6 font-light text-left'>
          {description}
        </p>
        <p className='text-sm font-medium text-blue dark:!text-[#ccc]'>
          Tecnologias:{" "}
          <span className='font-light'>
            {technologies.map((tech, index) => (
              <React.Fragment key={index}>
                {tech}
                {index < technologies.length - 1 && ", "}
              </React.Fragment>
            ))}
          </span>
        </p>
        <div className='flex w-full justify-between px-4 !text-black dark:!text-[#ccc]'>
          <div className='flex gap-2 text-sm items-center'>
            <ArrowUpRightFromSquare size={18} />
            <Link href={link} target='_blank' className='hover:underline'>
              Ver Projeto
            </Link>
          </div>
          <div className='flex gap-2 text-sm items-center'>
            <Github size={18} />
            <Link href={code} target='_blank' className='hover:underline'>
              Ver código
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
