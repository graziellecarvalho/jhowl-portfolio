import { Card, CardContent } from "@components/ui/card";
import { Separator } from "@components/ui/separator";

// Project data for mapping
const projects = [
  {
    id: 1,
    title: "Bitcoin Currency for Telegram",
    technologies: "Technologies: HTML5, HTML5, HTML5",
    iconSrc: "/icon---bot.png",
    iconAlt: "Icon bot",
    description: `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue id enim lobortis rutrum.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu enim in ex
scelerisque iaculis. Curabitur aliquet orci venenatis diam ultrices malesuada. Nullam et est rhoncus, porta nisi non,
dignissim orci. Cras scelerisque convallis consequat. Etiam nec ex eu orci rhoncus bibendum. Integer non commodo
ante, id malesuada eros. Integer nunc turpis, imperdiet ac leo ut, volutpat dignissim nulla. Donec mollis dui eget
tempor commodo.

Wanna know more? Visit this project repository by clicking `,
  },
  {
    id: 2,
    title: "Website project",
    technologies: "Technologies: HTML5, HTML5, HTML5",
    iconSrc: "/icon---bot-1.png",
    iconAlt: "Icon bot",
    description: `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue id enim lobortis rutrum.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu enim in ex
scelerisque iaculis. Curabitur aliquet orci venenatis diam ultrices malesuada. Nullam et est rhoncus, porta nisi non,
dignissim orci. Cras scelerisque convallis consequat. Etiam nec ex eu orci rhoncus bibendum. Integer non commodo
ante, id malesuada eros. Integer nunc turpis, imperdiet ac leo ut, volutpat dignissim nulla. Donec mollis dui eget
tempor commodo.

Wanna know more? Visit this project repository by clicking `,
  },
];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" className="w-full py-16">
      <div className="w-full max-w-[1060px] mx-auto">
        {/* Header section with decorative elements and title */}
        <div className="relative h-[284px] mb-8">
          {/* Decorative elements */}
          <div className="absolute w-[171px] h-[284px] top-0 left-0">
            <div className="absolute w-[120px] h-[184px] top-[100px] left-[22px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[105px] h-[105px] top-[29px] left-[19px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[83px] h-[69px] top-28 left-0 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[81px] h-[78px] top-0 left-[90px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
          </div>

          {/* Decorative dots */}
          <div className="absolute top-[29px] left-3 font-bold text-white text-3xl [font-family:'Inconsolata',Helvetica] leading-normal">
            . . .<br />. . .<br />. . .
          </div>

          {/* Heading and line - Properly aligned */}
          <div className="absolute top-[75px] left-[171px]">
            <h2 className="[font-family:'Inconsolata',Helvetica] font-bold text-[#b65d00] text-5xl leading-normal whitespace-nowrap">
              personal projects
            </h2>
            <div className="mt-[33px] w-[950px] h-px">
              <Separator className="bg-white/10" />
            </div>
          </div>
        </div>

        {/* Projects content */}
        <div className="space-y-16 pl-[171px]">
          {projects.map((project) => (
            <Card key={project.id} className="border-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex items-start gap-[38px]">
                  <img
                    className="w-[57px] h-[57px]"
                    alt={project.iconAlt}
                    src={project.iconSrc}
                  />

                  <div className="flex flex-col">
                    <h3 className="[font-family:'Inconsolata',Helvetica] font-bold text-[#dedede] text-4xl leading-normal whitespace-nowrap">
                      {project.title}
                    </h3>

                    <p className="mt-[6px] [font-family:'Inconsolata',Helvetica] font-semibold text-[#dedede] text-2xl leading-normal whitespace-nowrap">
                      {project.technologies}
                    </p>

                    <div className="mt-[40px] max-w-[936px] space-y-[5px] text-[#dedede] font-normal text-base [font-family:'Inconsolata',Helvetica] leading-normal">
                      {project.description.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                      <span className="font-bold text-[#fb8d27]">here</span>
                      <span className="text-white">.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};