import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-pink-600 rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center shadow-lg relative overflow-hidden">
            <img
              src="https://i.postimg.cc/c1vbYYFP/My-profile-pic.jpg"
              alt="About Me"
              className="rounded-full w-5/6 h-5/6 object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-t-full  bg-pink-600  -z-10 animate-pulse"></div>
        </div>

        {/* Right Side: About Content */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Hi, I'm [Your Name], a passionate [Your Profession] with a strong
            focus on creating impactful and user-friendly experiences. With a
            background in [Your Field], I specialize in [specific skills] and
            thrive on solving challenging problems with innovative solutions.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Beyond my professional work, I enjoy [hobbies/interests] and am
            constantly seeking opportunities to learn and grow. My goal is to
            make a positive difference in everything I do, whether it’s through
            my projects, collaborations, or contributions to the community.
          </p>

          {/* Call to Action */}
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:scale-105 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
