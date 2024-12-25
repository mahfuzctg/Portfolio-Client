import { useEffect, useState } from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ContactForm from "../../form/Contact/ContactForm";

const HomeBanner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 items-center justify-center w-full h-screen">
      {/* Main Content Section with 90% width on large devices */}
      <div className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Left Section: Text with Animation */}
        <div className="w-full text-center lg:text-left animate__animated animate__fadeInUp">
          {/* First Line */}
          <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl md:text-2xl">
            Hi there!
          </h1>

          {/* Second Line */}
          <h5 className="mt-4 md:text-3xl font-bold text-gray-800">
            I'm <span className="text-pink-600">Abdullah Al Mahfuz</span>
          </h5>

          {/* Third Line (Role animation) */}
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">
            A <span className="text-pink-600">{roles[roleIndex]}</span>
          </h3>

          <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl">
            I'm a passionate web developer with expertise in both frontend and
            backend technologies.
          </p>

          <p className="mt-4 font-bold text-base sm:text-xl md:text-2xl">
            20+{" "}
            <span className="text-gray-500">
              successful projects and counting.
            </span>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-pink-700">
                <FaGithub size={24} />
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-pink-700">
                <FaLinkedin size={24} />
              </div>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-pink-700">
                <FaTwitter size={24} />
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-pink-700">
                <FaFacebook size={24} />
              </div>
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-8">
            <a
              href="/path/to/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all"
            >
              <FaDownload className="mr-2" size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Center Section: Image */}
        <div className="w-full flex justify-center relative">
          <div className="bg-pink-600 rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center shadow-lg relative overflow-hidden">
            <img
              src="https://i.postimg.cc/c1vbYYFP/My-profile-pic.jpg"
              alt="About Me"
              className="rounded-full w-5/6 h-5/6 object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute w-72 h-72 md:w-[520px] md:h-[510px] rounded-t-full bg-pink-600 -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeBanner;
