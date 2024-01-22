"use client";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { Github, Instagram, Linkedin } from "lucide-react";
import Logo from "../../../public/logo.svg";

export function Header() {
  return (
    <header className='flex items-center w-full h-20'>
      <div className='w-full container px-[15px] mx-auto'>
        <div className=''>
          <div className='flex items-center gap-14 justify-between'>
            <Image
              src={Logo}
              alt='logo'
              width={150}
              height={150}
              className='self-end mt-8'
            />
            <ul className='flex items-center gap-10 text-gray dark:text-gray-200 font-medium'>
              <li>
                <Link href='#' className='gap-3 hover:opacity-80'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='#' className='gap-3 hover:opacity-80'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#' className='gap-3 hover:opacity-80'>
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href='#' className='gap-3 hover:opacity-80'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='#' className='gap-3 hover:opacity-80'>
                  Contact
                </Link>
              </li>
              <li className='flex gap-4'>
                <Link
                  href='https://github.com/MarcosGomesDev'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Github size={24} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/marcos-gomes-dev/'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href='https://www.instagram.com/'
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
