import Link from "next/link";

import LightError from "../../public/error-illustration-light.svg";
import DarkError from "../../public/error-illustration.svg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='py-2 w-full flex justify-center'>
      <div className='container w-full flex justify-center'>
        {/* BEGIN: Error Page */}
        <div className='flex flex-col items-center justify-center h-screen text-center error-page lg:flex-row lg:text-left'>
          <div className='-intro-x lg:mr-20'>
            <Image
              alt='Página não encontrada'
              className='w-[450px] h-48 lg:h-auto hidden dark:flex'
              width={450}
              src={DarkError}
            />
            <Image
              alt='Página não encontrada'
              className='w-[450px] h-48 lg:h-auto dark:hidden'
              src={LightError}
            />
          </div>
          <div className='mt-10 text-blue dark:text-white lg:mt-0'>
            <div className='font-medium intro-x text-8xl'>404</div>
            <div className='mt-5 text-xl font-medium intro-x lg:text-3xl'>
              Oops. Você tentou acessar uma página que se perdeu pelo caminho.
            </div>
            <Link
              className='px-4 py-3 mt-10 border-blue text-blue dark:text-white dark:border-white intro-x dark:border-darkmode-400 border rounded-lg block w-56 text-center'
              href={"/"}
            >
              Voltar para a Home
            </Link>
          </div>
        </div>
        {/* END: Error Page */}
      </div>
    </div>
  );
}
