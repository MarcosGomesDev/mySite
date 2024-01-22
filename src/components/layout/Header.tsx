import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center w-full h-20">
      <div className="w-full max-w-[1200px] px-[15px] mx-auto">
        <div>
          <div className="flex items-center gap-14 justify-between">
            <Image src="/vercel.svg" alt="logo" width={150} height={150} />
            <ul className="flex items-center gap-10">
              <li>
                <Link href="#" className="gap-3">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="gap-3">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="gap-3">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="gap-3">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="gap-3">
                  Contact
                </Link>
              </li>
              <li className="flex gap-4">
                <Link href="#" className="gap-3 mr-2">
                  <Github size={24} />
                </Link>
                <Link href="#" className="gap-3 mr-2">
                  <Linkedin size={24} />
                </Link>
                <Link href="#" className="gap-3">
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
