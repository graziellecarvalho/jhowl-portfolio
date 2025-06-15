import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";

// Define skill data for mapping
const skillCategories = [
  {
    level: "Beginner",
    color: "bg-[#d9d9d9]",
    textColor: "text-black",
    hoverColor: "hover:bg-[#b3b3b3]",
    skills: ["Ruby", "C#", "Java"],
  },
  {
    level: "Intermediate",
    color: "bg-[#fb8d27]",
    textColor: "text-black",
    skills: ["Python", "React", "SvelteKit", "Go"],
  },
  {
    level: "Advanced",
    color: "bg-[#b65d00]",
    textColor: "text-black",
    skills: [
      "NodeJS",
      "JavaScript",
      "HTML",
      "MySQL",
      "PHP",
      "WordPress",
      "API",
      "MongoDB",
      "WooCommerce",
    ],
  },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <section id="skills" className="relative w-full py-8">
      <div className="relative w-full mb-8">
        <div className="relative h-[151px]">
          {/* Decorative elements */}
          <div className="absolute w-[171px] h-[151px] top-0 left-0">
            <div className="absolute w-[105px] h-[105px] top-[46px] left-0 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[137px] h-[69px] top-0 left-10 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
          </div>

          {/* Heading and line - Properly aligned */}
          <div className="absolute top-[75px] left-[171px]">
            <h2 className="font-['Inconsolata',Helvetica] font-bold text-[#b65d00] text-5xl">
              skills
            </h2>
            <div className="mt-[33px] w-[950px] h-px">
              <Separator className="bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-16 ml-[171px]">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="font-['Inconsolata',Helvetica] font-bold text-white text-2xl">
              {category.level}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  className={`${category.color} ${category.textColor} ${category.hoverColor || ''} rounded-[10px] font-['Inconsolata',Helvetica] font-bold px-4 py-1 h-[25px] transition-colors duration-200`}
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