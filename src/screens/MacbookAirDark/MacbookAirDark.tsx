import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export const MacbookAirDark = (): JSX.Element => {
  return (
    <div className="bg-[#000002] flex flex-row justify-center w-full">
      <div className="bg-[#000002] border border-solid border-transparent w-full max-w-[1280px] relative">
        <NavigationSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <footer className="w-full py-4 text-base text-center [font-family:'Inconsolata',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
          Jhowl - 2023
        </footer>

        <div className="fixed w-[65px] h-[457px] top-0 right-0">
          <img
            className="absolute w-px h-[380px] top-0 left-8"
            alt="Line"
            src="/line-1.svg"
          />
          <img
            className="w-[65px] h-[60px] top-[397px] absolute left-0"
            alt="Icon"
            src="/icon-1.png"
          />
        </div>
      </div>
    </div>
  );
};
