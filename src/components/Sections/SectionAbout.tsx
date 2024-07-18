"use client";

import { Element } from "react-scroll";

export function SectionAbout() {
  return (
    <Element name='about' className='element'>
      <section className='flex w-full pb-16 md:pb-0 md:h-screen justify-center md:items-center'>
        <div className='w-full container mx-auto py-20 flex justify-center items-start'>
          <div className='text-center flex flex-col'>
            <h3 className='text-3xl md:text-5xl font-bold'>Sobre</h3>
            <p className='text-gray-200 text-pretty text-lg md:text-2xl md:text-center mt-8 md:mt-16 px-2 md:px-24 !leading-relaxed'>
              Engenheiro de software, trabalhando com as tecnologias mais
              atuais. Proficiente na criação e implementação de soluções
              tecnológicas inovadoras, participando todo o ciclo de
              desenvolvimento de software. Comprometido com a entrega de
              produtos de alta qualidade, utilizando as melhores práticas de
              codificação. Proativo, colaborativo e constantemente atualizado
              com as últimas tendências e avanços no campo de desenvolvimento de
              software.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}
