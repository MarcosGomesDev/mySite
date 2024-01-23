import Image from "next/image";
import Person from "../../../public/person.png";

export const SectionHero = () => {
  const activeStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]";
  return (
    <section className='flex items-center w-full h-[704px]'>
      <div className='w-full container mx-auto flex justify-around items-center'>
        <div className=''>
          <h3 className='text-4xl text-blue dark:text-gray-100 font-bold leading-tight'>
            Olá 👋, <br /> Meu nome é <br />{" "}
            <span className={`${activeStyle}`}> Marcos Gomes</span> <br />{" "}
            Desenvolvedor Fullstack
          </h3>
        </div>
        <div className='rounded-full flex items-center justify-center w-[349px] h-[349px] bg-gradient-b-border-gradient'>
          <div className='bg-white dark:bg-[#191919]  inset-0 w-[335px] h-[335px] rounded-full flex items-center justify-center'>
            <Image src={Person} alt='hero' width={200} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};
