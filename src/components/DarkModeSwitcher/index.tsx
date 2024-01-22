"use client";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface DarkModeSwitcherProps {
  className?: string;
}

function DarkModeSwitcher({ className }: DarkModeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const darkMode = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className={twMerge([
          "flex flex-row gap-4 justify-center items-center",
          className,
        ])}
      >
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={clsx([
            "border w-[44px] h-[24px] p-px outline-none rounded-full relative cursor-pointer",
            "before:content-[''] before:w-[22px] before:h-[22px] before:transition-all before:duration-200 before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:absolute before:inset-y-0 before:my-auto before:rounded-full",
            {
              "bg-primary border-gray-200": darkMode,
              "before:ml-[19px] before:bg-white border-gray": darkMode,
            },
          ])}
        ></div>
        {darkMode ? (
          <Moon className="inset-y-0 right-0 w-5 h-5 my-auto mr-3  text-white" />
        ) : (
          <Sun className="inset-y-0 right-0 w-5 h-5 my-auto mr-3  text-darkmode-500" />
        )}
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default DarkModeSwitcher;
