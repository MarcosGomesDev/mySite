"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Element } from "react-scroll";

export function Footer() {
  return (
    <Element name='contact'>
      <footer className='h-20 w-full'>
        <div className='w-full container px-[15px] mx-auto pb-12'>
          <div className='border-b-2 border-b-gray-200'>
            <div className='flex items-center justify-between'>
              <Image
                src='https://res.cloudinary.com/gomesdev/image/upload/v1707685275/marcosgomes/logo_zvfe7c.svg'
                alt='logo'
                width={96}
                height={82}
                priority
              />
              <div className='flex gap-6'>
                <p className='hidden md:flex text-blue dark:text-gray-200'>
                  marcosgomesdev@gmail.com
                </p>
                <ul className='flex items-center text-blue dark:text-gray-200 font-medium mr-4'>
                  <li className='flex'>
                    <Link
                      href='mailto:marcosgomesdev@gmail.com'
                      target='_blank'
                      className='gap-3 mr-2 hover:opacity-80 md:hidden flex'
                    >
                      <Mail size={24} />
                    </Link>
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
                </ul>
              </div>
            </div>
          </div>
          <p className='text-gray dark:text-gray-200 text-center mt-8'>
            Marcos Gomes © 2023
          </p>
        </div>
      </footer>
    </Element>
  );
}
