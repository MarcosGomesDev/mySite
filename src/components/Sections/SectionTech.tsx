import Image from "next/image";
import { logos } from "./logos";

export const SectionTech = () => {
  return (
    <section className='flex w-full min-h-[704px] justify-center'>
      <div className='w-full container py-20 mx-auto flex justify-center items-start'>
        <div className='text-center flex flex-col'>
          <h3 className='text-5xl font-bold'>Tecnologias</h3>
          <p className='mt-6 text-3xl font-light text-gray-200'>
            Tecnologias que trabalhei recentemente
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-24 gap-8 items-center justify-center'>
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className='object-contain aspect-[4/3] w-32 h-auto'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
