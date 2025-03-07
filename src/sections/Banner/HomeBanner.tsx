import { useEffect, useState } from "react";
import { FaEye, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../../form/Contact/ContactForm";

const HomeBanner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Developer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <div className="p-4 md:mt-0 flex flex-col lg:flex-row gap-6 items-center justify-center w-full bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C]">
      {/* Main Content Section */}
      <div className="w-full mt-10 flex flex-col lg:flex-row gap-6 items-center justify-center text-center lg:text-left">
        {/* Left Section: Text with Animation */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate__animated animate__fadeInUp">
          {/* First Line */}
          <h1 className="font-bold text-[#F4F6FF] text-3xl sm:text-4xl md:text-2xl">
            Hi there!😊
          </h1>

          {/* Second Line */}
          <h5 className="mt-4 md:text-3xl font-bold text-[#F4F6FF]">
            I'm <span className="text-[#F4F6FF]">Abdullah Al Mahfuz</span>
          </h5>

          {/* Third Line (Role animation) */}
          <h3 className="mt-4 text-[#F4F6FF] text-2xl sm:text-3xl font-semibold">
            A <span className="text-[#F4F6FF]">{roles[roleIndex]}</span>
          </h3>

          <p className="text-[#F4F6FF] mt-4 text-base sm:text-lg md:text-xl">
            I'm an enthusiastic web developer with expertise in both frontend
            and backend technologies.
          </p>

          <p className="mt-4 text-[#dfc230] font-bold text-base sm:text-xl md:text-2xl">
            15+
            <span className="text-[#F4F6FF]">
              Completed projects and still counting.
            </span>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
            <a
              href="https://github.com/mahfuzctg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F4F6FF] text-[#151515] w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-[#F4F6FF]">
                <FaGithub size={24} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-al-mahfuz-ctg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F4F6FF] text-[#151515] w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-[#F4F6FF]">
                <FaLinkedin size={24} />
              </div>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F4F6FF] text-[#151515] w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-[#F4F6FF]">
                <FaFacebook size={24} />
              </div>
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1vVIlz9MM4HWC8r1S0LMWvWFl5iUDOjl2/view?usp=drive_link"
              target="_blank" // This ensures the link opens in a new tab
              rel="noopener noreferrer" // Security measure for external links
              className="inline-flex items-center px-6 py-3 bg-[#F4F6FF] text-[#151515] rounded-full hover:bg-[#F4F6FF] transition-all"
            >
              <FaEye className="mr-2" size={18} />
              View Resume
            </a>
          </div>
        </div>

        {/* Center Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
          <div className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-t-full rounded-b-lg w-64 h-64 md:w-72 md:h-80 lg:w-[450px] lg:h-[550px] flex items-center justify-center  relative overflow-hidden">
            <img
              src="https://i.postimg.cc/c1vbYYFP/My-profile-pic.jpg"
              alt="About Me"
              className="rounded-t-full w-5/6 h-5/6 object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute  w-72 h-72 md:w-[320px] md:h-[310px] bg-[#030305] -z-30  animate-pulse"></div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeBanner;
