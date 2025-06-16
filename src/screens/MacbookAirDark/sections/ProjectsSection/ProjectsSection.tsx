import { Card, CardContent } from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import project_data from "./project-data.json";
import { ProjectTypes } from "./project-types";

const projects = project_data as ProjectTypes[];

export const ProjectsSection = (): JSX.Element => (
  <section id="projects" className="py-16 container">
    <div className="w-full mx-auto">
      {/* Header section with decorative elements and title */}
      <div className="relative h-[224px] mb-8">
        <DottedDecoration />
        <div className="absolute top-[75px] w-full">
          <h2 className="font-bold text-[#b65d00] text-5xl leading-normal whitespace-nowrap">
            personal projects
          </h2>
          <div className="mt-8 w-full max-w-[950px] h-px">
            <Separator className="bg-white" />
          </div>
        </div>
      </div>

      {/* Projects content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {projects.map(({ id, title, iconAlt, iconSrc, technologies, description, url }) => (
          <Card key={id} className="border-none bg-transparent">
            <CardContent className="p-0">
              <div className="flex flex-wrap items-start gap-3 md:gap-7">
                <div className="flex items-center min-h-[90px]">
                  <img
                    className="w-[57px] h-[57px] shrink-0 mr-5"
                    alt={iconAlt || `Icon for ${title}`}
                    src={iconSrc}
                  />
                  <h3 className="font-bold text-[#dedede] text-4xl leading-tight">{title}</h3>
                </div>
        
                <div className="flex flex-col gap-3 text-[#dedede]">
                  <p className="font-semibold text-2xl">Technologies: {technologies}</p>
                  <p>
                    <strong>Description:</strong> {description}
                  </p>
                  <p>
                    <strong>
                      Want to know more? Check the{" "}
                      <a
                        href={url}
                        className="text-[#fb8d27] underline hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        project repository
                      </a>
                      .
                    </strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const DottedDecoration = () => (
  <div
    className="absolute top-[29px] left-[-110px] font-bold text-white text-3xl space-y-1"
    aria-hidden="true"
  >
    {[...Array(3)].map((_, i) => (
      <div key={i} className={`animate-pulse delay-${i * 100}`}>. . .</div>
    ))}
  </div>
);
