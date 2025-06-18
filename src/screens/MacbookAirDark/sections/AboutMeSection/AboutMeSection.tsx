import { Card } from "@components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  return (
    <section id="about" className="w-full container mx-auto py-8 relative" aria-label="About Jhonatan Souza">
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        {/* Profile image with decorative elements */}
        <div className="relative w-full max-w-[450px] pr-6">
          <div className="relative w-full h-[404px]">
            {/* Decorative elements */}
            <DecorativeSquares />

            {/* Main profile image container */}
            <Card className="absolute w-[309px] h-[309px] top-[77px] left-[38px] bg-[#000002] rounded-3xl border border-solid border-[#979797] overflow-hidden p-0">
              <img
                className="w-full h-full object-cover"
                alt="Jhonatan Souza - Backend Developer and Ai Developer"
                src="/rectangle-31.png"
                loading="eager"
                width="309"
                height="309"
              />
            </Card>

            {/* Decorative dots */}
            <SideDottedDecoration />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col">
          {/* Name */}
          <h1 className="font-semibold text-white text-5xl mb-4">
            Jhonatan Souza
          </h1>

          {/* Nickname */}
          <h2 className="font-semibold text-4xl mb-8">
            <span className="text-white">but you can call me </span>
            <span className="text-[#fb8d27]">Jhowl</span>
          </h2>

          {/* Skills */}
          <div className="flex flex-col gap-[5px] mb-12">
            <p className="font-semibold text-white text-2xl">
              Back-end developer
            </p>
            <p className="font-semibold text-white text-2xl">
              making AI agents on my free time
            </p>
            <p className="font-semibold text-white text-2xl">
              and API integrations
            </p>
          </div>
        </div>
      </div>

      {/* Experience section at bottom */}
      <div className="mt-24 flex items-start gap-3">
        {/* Decorative elements */}
        <div className="relative absolute top-[-50px] left[-80px] w-[86px] h-[85px] flex-shrink-0" aria-hidden="true">
          <Card className="absolute w-16 h-[68px] top-0 left-0 bg-[#000002] rounded-xl border-2 border-solid border-[#dedede]" />
          <Card className="absolute w-16 h-[39px] top-[46px] left-[22px] bg-[#000002] rounded-xl border-2 border-solid border-[#dedede]" />
        </div>

        {/* Experience text */}
        {(() => {
          const startYear = 2013;
          const currentYear = new Date().getFullYear();
          const yearsOfExperience = currentYear - startYear;
          return (
            <p className="font-bold text-white text-2xl text-center">
              I&apos;ve been working as a back-end for {yearsOfExperience} years. On
              my early years,
              <br />I developed services using PHP and using WordPress as a CMS.
            </p>
          );
        })()}
      </div>
    </section>
  );
};

const SideDottedDecoration = () => (
  <div
    className="absolute top-[29px] left-3 font-bold text-white text-3xl [font-family:'Inconsolata',Helvetica] leading-normal space-y-1"
    aria-hidden="true"
  >
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="animate-pulse"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        . . . .
      </div>
    ))}
  </div>
);

const DecorativeSquares = () => {
  const cs = "absolute w-[163px] bg-[#000002] rounded-3xl border-2 border-solid border-[#dedede]"
  return (
    <>
      <Card className={`h-[172px] top-0 left-[229px] animate-floatY ${cs}`} />
      <Card className={`h-[99px] top-[305px] left-0 animate-floatWiggle ${cs}`} />
      <Card className={`h-[99px] top-[117px] left-[285px] ${cs}`} />
    </>
  )
}
