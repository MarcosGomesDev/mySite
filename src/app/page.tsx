import Image from "next/image";

import Person from "../../public/person.png";
import { SectionHero, SectionTech } from "@/components";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionTech />
    </>
  );
}
