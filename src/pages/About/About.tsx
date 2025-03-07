import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className=" md:fixed md:bottom-5 p-6 ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center ">
        {/* Left Side:  Video */}
        <div className="w-full lg:w-1/2 flex justify-center  relative mt-6 lg:mt-0">
          <div className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-t-full rounded-b-lg w-64 h-96 md:w-72 md:h-80 lg:w-[400px] lg:h-[640px] flex items-center justify-center relative overflow-hidden">
            <video
              src="/public/videos/Updated-Resume-Video.mp4"
              className="rounded-t-full w-full pt-10 md:pt-0 md:w-5/6   bg-gradient-to-b from-[#151515] via-[#211951] to-[#10375C]"
              autoPlay
              loop
              controls
              playsInline
            ></video>
          </div>
          {/* Decorative Circle */}
          <div className="absolute w-72 h-72 md:w-[320px] md:h-[310px]  -z-30 animate-pulse"></div>
        </div>

        {/* Right Side: About Content */}
        <div className="w-full md:w-1/2 text-[#F4F6FF] space-y-6 mt-8 md:mt-0">
          <h2 className="text-3xl  md:text-4xl font-extrabold text-[#F4F6FF] mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Full-Stack Web Developer | I have helped over 100 people via Google
            Meet and other platforms to resolve their technical issues. Focused
            on building clean and responsive websites with strong debugging and
            troubleshooting skills.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I aim to further enhance my expertise in full-stack development,
            create innovative and scalable web solutions, and collaborate with
            international projects, teams, and companies to expand my global
            impact.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Let’s connect if you’re looking for a developer who can efficiently
            fix bugs, optimize websites, and deliver reliable, high-quality web
            solutions!
          </p>

          {/* Call to Action */}
          <button
            className="mt-6 px-6 py-3 bg-[#10375C] text-[#F4F6FF] font-semibold rounded-full shadow-lg hover:bg-[#211951] hover:scale-105 transition-all"
            onClick={() => navigate("/contact")} // Navigate to ContactPage
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
