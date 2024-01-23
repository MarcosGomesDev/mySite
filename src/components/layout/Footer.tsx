import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className='h-6 w-full'>
      <div className='w-full container px-[15px] mx-auto'>
        <div className='border-b-2 border-b-gray-200'>
          <div className='flex items-center justify-between'>
            <Image
              src={Logo}
              alt='logo'
              width={120}
              height={120}
              className='self-end mt-8'
            />
            <div>
              <ul className='flex items-center text-gray dark:text-gray-200 font-medium mr-4'>
                <li className='flex'>
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
  );
}
