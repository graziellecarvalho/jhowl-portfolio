import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="w-full py-16 relative">
      <div className="container mx-auto">
        {/* Decorative elements */}
        <div className="relative h-[284px] mb-8">
          <div className="absolute w-[171px] h-[284px] top-0 left-0">
            <div className="absolute w-[120px] h-[184px] top-[100px] left-[22px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[105px] h-[105px] top-[29px] left-[19px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[83px] h-[69px] top-28 left-0 bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
            <div className="absolute w-[81px] h-[78px] top-0 left-[90px] bg-[#000002] rounded-[25px] border-2 border-solid border-[#dedede]" />
          </div>

          {/* Heading and line - Properly aligned */}
          <div className="absolute top-[75px] left-[171px]">
            <h2 className="font-['Inconsolata',Helvetica] font-bold text-[#b65d00] text-5xl">
              contact
            </h2>
            <div className="mt-[33px] w-[950px] h-px">
              <img
                className="w-full h-px object-cover"
                alt="Line"
                src="/line-2.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact form */}
          <div className="flex-1 space-y-6">
            <Input
              className="h-[39px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white"
              placeholder="Enter your name"
            />

            <Input
              className="h-[39px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white"
              placeholder="Enter your email"
            />

            <Textarea
              className="h-[233px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white resize-none"
              placeholder="Enter your message for me"
            />
          </div>

          {/* Social media section */}
          <div className="mt-10 md:mt-0">
            <p className="font-['Inconsolata',Helvetica] font-bold text-[#dedede] text-base mb-4">
              Follow me on social media
            </p>
            <div className="space-y-3">
              {/* GitHub link */}
              <a 
                href="https://github.com/Jhowl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#fb8d27] transition-colors"
              >
                <GithubIcon className="w-[33px] h-[33px] text-[#dedede]" />
                <span className="font-['Inconsolata',Helvetica] font-bold text-[#dedede] text-base">
                  /jhowl
                </span>
              </a>

              {/* LinkedIn link */}
              <a 
                href="https://www.linkedin.com/in/jhonatan1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#fb8d27] transition-colors"
              >
                <LinkedinIcon className="w-[33px] h-[33px] text-[#dedede]" />
                <span className="font-['Inconsolata',Helvetica] font-bold text-[#dedede] text-base">
                  /jhonatan1
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};