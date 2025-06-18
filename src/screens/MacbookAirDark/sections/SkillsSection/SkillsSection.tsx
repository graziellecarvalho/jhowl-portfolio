import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import skills_data from "./skills-data.json";

const skillsColor = [
  { id: 0, color: '#d9d9d9' },
  { id: 1, color: '#fb8d27' },
  { id: 2, color: '#b65d00' },
]

const skillAnimation = "transition-transform duration-200 hover:scale-105 hover:brightness-110"

export const SkillsSection = (): JSX.Element => {
  return (
    <section id="skills" className="relative py-8 container">
      <div className="relative w-full mb-8">
        {/* Heading and line - Properly aligned */}
        <div className="relative h-[151px]">
          <SquareDecoration />
          <div className="absolute top-[75px] w-full">
            <h2 className="font-bold text-[#b65d00] text-5xl">
              skills
            </h2>
            <div className="mt-[33px] w-[950px] h-px">
              <Separator className="bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {skills_data.map(({ level, skills }, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-2xl">
              {level}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  style={{ backgroundColor: skillsColor.find(({ id }) => id === idx)?.color }}
                  className={`text-black rounded-[10px] font-bold px-4 py-1 h-[25px] transition-colors duration-200 ${skillAnimation}`}
                >
                  {skill}
                </Badge>
                ))}
            </div> 
          </div>
        ))}
      </div>
    </section>
  );
};

const SquareDecoration = () => (
  <div className="absolute w-[171px] h-[151px] top-[-10px] left-[-140px]">
    <div className="absolute w-[105px] h-[105px] top-[46px] left-0 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede] animate-floatY" />
    <div className="absolute w-[137px] h-[69px] top-0 left-10 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede] animate-floatWiggle" />
  </div>
);
