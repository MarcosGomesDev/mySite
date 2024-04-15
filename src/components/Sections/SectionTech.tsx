"use client";
import Image from "next/image";
import { Element } from "react-scroll";
import { logos } from "./logos";

export const SectionTech = () => {
  return (
    <Element name='tech' className='element'>
      <section className='flex w-full min-h-screen justify-center pt-4 pb-16 md:items-center md:pb-0'>
        <div className='w-full container py-20 mx-auto flex justify-center items-start'>
          <div className='text-center flex flex-col'>
            <h3 className='text-3xl md:text-5xl font-bold'>Tecnologias</h3>
            <p className='mt-6 text-xl md:text-3xl font-light text-gray-200'>
              Tecnologias que trabalhei recentemente
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 md:mt-24 gap-8 justify-center px-4'>
              {logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  width={128}
                  height={96}
                  priority
                  className='object-contain aspect-[4/3] sm:ml-6'
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
