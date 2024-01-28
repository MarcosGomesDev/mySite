"use client";

import { Element } from "react-scroll";

export function SectionAbout() {
  return (
    <Element name='about' className='element'>
      <section className='flex w-full min-h-[704px] justify-center pt-4 mt-12'>
        <div className='w-full container py-20 mx-auto flex justify-center items-start'>
          <div className='text-center flex flex-col'>
            <h3 className='text-5xl font-bold'>Sobre</h3>
            <p className='text-gray-200 text-pretty text-2xl md:text-center mt-16 px-2 md:px-24 !leading-relaxed'>
              Desenvolvedor Full Stack, trabalhando com as tecnologias mais
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
