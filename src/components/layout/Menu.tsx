"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

const arrayMenu = [
  {
    name: "Início",
    ref: "home",
  },
  {
    name: "Sobre",
    ref: "about",
  },
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

  const [activeMenu, setCurrentMenu] = useState<string>(() => {
    if (typeof window === "undefined") return "home";
    const url = new URL(window.location.toString());

    if (url.searchParams.has("section")) {
      const menu = url.searchParams.get("section")?.replace("section", "");

      return menu ?? "home";
    }

    return "home";
  });

  function handleChangeActiveMenu(menu: string) {
    const url = new URL(window.location.toString());

    url.searchParams.set("section", menu);

    window.history.pushState({}, "", url);

    setCurrentMenu(menu);
  }

  return (
    <>
      {arrayMenu.map((item, index) => (
        <li key={item.name} className='mb-2 lg:mb-0'>
          <Link
            to={item.ref}
            onClick={() => {
              onClick && onClick();
              handleChangeActiveMenu(item.ref);
            }}
            smooth={true}
            duration={100}
            className={twMerge([
              `gap-3 hover:opacity-80 cursor-pointer leading-relaxed`,
              `${activeMenu === item.ref ? activeStyle : ""}`,
            ])}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
