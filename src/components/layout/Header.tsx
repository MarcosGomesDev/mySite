"use client";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { Github, Instagram, Linkedin } from "lucide-react";
import Logo from "../../../public/logo.svg";
import { twMerge } from "tailwind-merge";

const arrayMenu = ["Inicio", "Sobre", "Tecnologias", "Projetos", "Contato"];

export function Header() {
  const activeStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#00C0FD]";

  return (
    <header className='flex items-center w-full h-20'>
      <div className='w-full container px-[15px] mx-auto'>
        <div>
          <div className='flex items-center justify-between'>
            <Image
              src={Logo}
              alt='logo'
              className='w-24 h-auto object-contain'
            />
            <ul className='hidden lg:flex items-center gap-10 text-gray dark:text-gray-200 font-semibold '>
              {arrayMenu.map((item, index) => (
                <li key={item}>
                  <Link
                    href='#'
                    className={twMerge([
                      `gap-3 hover:opacity-80`,
                      `${index === 0 ? activeStyle : ""}`,
                    ])}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              <li className='flex gap-4'>
                <Link
                  href='https://github.com/MarcosGomesDev'
                  target='_blank'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Github size={24} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/marcos-gomes-dev/'
                  target='_blank'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='gap-3 hover:opacity-80'
                >
                  <Instagram size={24} />
                </Link>
              </li>
              <li>
                <DarkModeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
