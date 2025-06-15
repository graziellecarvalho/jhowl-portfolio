import React, { useState } from "react";
import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import apiService from "@lib/api";

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.email.includes("@")) return "Please enter a valid email";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await apiService.sendContactForm(formData);
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to send message");
        setTimeout(() => {
          setSubmitStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 relative" aria-label="Contact Jhonatan Souza">
      <div className="container mx-auto">
        {/* Decorative elements */}
        <div className="relative h-[284px] mb-8" aria-hidden="true">
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
                alt=""
                src="/line-2.svg"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact form */}
          <div className="flex-1 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-[39px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-[39px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="h-[233px] bg-[#d9d9d966] rounded-xl text-white font-['Inconsolata',Helvetica] font-bold placeholder:text-white resize-none"
                  placeholder="Enter your message for me"
                  disabled={isSubmitting}
                  required
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-[39px] bg-[#b65d00] hover:bg-[#fb8d27] text-white font-['Inconsolata',Helvetica] font-bold rounded-xl transition-colors duration-200 flex items-center gap-2"
                aria-describedby={submitStatus !== "idle" ? "form-status" : undefined}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div id="form-status" className="text-green-400 font-['Inconsolata',Helvetica] font-bold text-sm" role="alert">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div id="form-status" className="text-red-400 font-['Inconsolata',Helvetica] font-bold text-sm" role="alert">
                  ❌ {errorMessage || "Failed to send message. Please try again later."}
                </div>
              )}
            </form>
          </div>

          {/* Social media section */}
          <div className="mt-10 md:mt-0">
            <h3 className="font-['Inconsolata',Helvetica] font-bold text-[#dedede] text-base mb-4">
              Follow me on social media
            </h3>
            <nav aria-label="Social media links">
              <div className="space-y-3">
                {/* GitHub link */}
                <a 
                  href="https://github.com/Jhowl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#fb8d27] transition-colors"
                  aria-label="Visit Jhonatan's GitHub profile"
                >
                  <GithubIcon className="w-[33px] h-[33px] text-[#dedede]" aria-hidden="true" />
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
                  aria-label="Visit Jhonatan's LinkedIn profile"
                >
                  <LinkedinIcon className="w-[33px] h-[33px] text-[#dedede]" aria-hidden="true" />
                  <span className="font-['Inconsolata',Helvetica] font-bold text-[#dedede] text-base">
                    /jhonatan1
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};