import { Card, CardContent } from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import project_data from './project-data.json';
import { ProjectTypes } from './project-types';

const projects_d = project_data as ProjectTypes[];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" className="w-full py-16 container">
      <div className="w-full mx-auto">
        {/* Header section with decorative elements and title */}
        <div className="relative h-[284px] mb-8">

          <DottedDecoration />

          {/* Heading and line - Properly aligned */}
          <div className="absolute top-[75px]">
            <h2 className="[font-family:'Inconsolata',Helvetica] font-bold text-[#b65d00] text-5xl leading-normal whitespace-nowrap">
              personal projects
            </h2>
            <div className="mt-[33px] w-[950px] h-px">
              <Separator className="bg-white/10" />
            </div>
          </div>
        </div>

        {/* Projects content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects_d.map(({ id, iconAlt, iconSrc, title, technologies, description, url }) => (
            <Card key={id} className="border-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-wrap items-start gap-3 md:gap-7">
                  <div className="flex items-center">
                    <img
                      className="w-[57px] h-[57px] shrink-0 mr-5"
                      alt={iconAlt}
                      src={iconSrc}
                    />
                    <h3 className="[font-family:'Inconsolata',Helvetica] font-bold text-[#dedede] text-4xl" style={{ lineHeight: '1.2' }}>
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <p className="[font-family:'Inconsolata',Helvetica] mt-[6px] font-semibold text-[#dedede] text-2xl">
                      Technologies: {technologies}
                    </p>
                    <div className="[font-family:'Inconsolata',Helvetica] mt-10 space-y-[5px] text-[#dedede]">
                      <p><strong>Description:</strong> {description}</p>
                      <br />
                      <p>
                        <strong>
                          Wanna know more? Visit this project repository by clicking <a href={url} className="text-[#fb8d27]">here</a>.
                        </strong>
                      </p>
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

const DottedDecoration = () => {
  return (
    <div className="absolute top-[29px] left-[-110px] font-bold text-white text-3xl [font-family:'Inconsolata',Helvetica] leading-normal space-y-1" aria-hidden="true">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`animate-pulse delay-${i * 100}`}>. . .</div>
      ))}
    </div>
  )
}