"use client";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

const arrayMenu = [
  {
    name: "Início",
    ref: "home",
  },
  // {
  //   name: "Sobre",
  //   ref: "about",
  // },
  {
    name: "Tecnologias",
    ref: "tech",
  },
  {
    name: "Projetos",
    ref: "projects",
  },
  {
    name: "Contato",
    ref: "contact",
  },
];

interface MenuProps {
  onClick?: () => void;
}

export function MenuHeader({ onClick }: MenuProps) {
  const activeStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#00C0FD]";

  const [menu, setMenu] = useQueryState("active");

  const [activeMenu, setActiveMenu] = useState(Number(menu));

  return (
    <>
      {arrayMenu.map((item, index) => (
        <li key={item.name} className='mb-2 lg:mb-0'>
          <Link
            to={item.ref}
            onClick={() => {
              onClick && onClick();
              setActiveMenu(index);
              setMenu(index.toString());
            }}
            smooth={true}
            duration={100}
            className={twMerge([
              `gap-3 hover:opacity-80 cursor-pointer leading-relaxed`,
              `${activeMenu === index ? activeStyle : ""}`,
            ])}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
