import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-[#10375C] rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center shadow-lg relative overflow-hidden">
            <img
              src="https://i.postimg.cc/c1vbYYFP/My-profile-pic.jpg"
              alt="About Me"
              className="rounded-full w-5/6 h-5/6 object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-t-full bg-[#211951] -z-10 animate-pulse"></div>
        </div>

        {/* Right Side: About Content */}
        <div className="w-full md:w-1/2 text-[#F4F6FF] space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F4F6FF] mb-4">
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
