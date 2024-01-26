import {
  SectionAbout,
  SectionHero,
  SectionProjects,
  SectionTech,
} from "@/components";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionTech />
      <SectionProjects />
    </>
  );
}
