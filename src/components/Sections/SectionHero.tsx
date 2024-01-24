import Image from "next/image";
import Person from "../../../public/person.png";

export const SectionHero = () => {
  const activeStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]";
  return (
    <section className='flex items-center w-full h-[704px]'>
      <div className='w-full container mx-auto flex justify-center lg:justify-around items-center flex-col lg:flex-row text-center'>
        <div className='mb-6 lg:mb-0'>
          <h3 className='text-4xl text-blue dark:text-gray-100 font-bold leading-tight'>
            Olá 👋, <br /> Meu nome é <br />{" "}
            <span className={`${activeStyle}`}> Marcos Gomes</span> <br />{" "}
            Desenvolvedor Fullstack
          </h3>
        </div>
        <div className='rounded-full flex items-center justify-center w-72  bg-gradient-b-border-gradient h-72'>
          <div className='bg-white dark:bg-[#191919]  inset-0 w-[17rem] h-[17rem] rounded-full flex items-center justify-center'>
            <Image src={Person} alt='hero' className='w-40 h-auto' />
          </div>
        </div>
      </div>
    </section>
  );
};
