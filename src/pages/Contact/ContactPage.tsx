import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] mt-20 p-8 rounded-lg shadow-lg   w-full max-w-lg mx-auto">
      <h2 className="text-center font-bold text-[#F4F6FF] flex items-center space-x-2">
        ✨<span>QUICK TOUCH</span>
      </h2>

      <form className="mt-6 space-y-6">
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#F4F6FF] text-sm font-medium"
          >
            <span className="flex items-center space-x-2">
              <FaEnvelope size={18} className="text-[#F4F6FF]" />
              <span>Email</span>
            </span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-3 border border-[#F4F6FF] bg-transparent rounded-lg focus:ring-2 focus:ring-[#F4F6FF] focus:outline-none text-[#F4F6FF] placeholder-[#F4F6FF]/70"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-[#F4F6FF] text-sm font-medium"
          >
            <span className="flex items-center space-x-2">
              <span role="img" aria-label="message" className="text-[#F4F6FF]">
                💬
              </span>
              <span>Your Message</span>
            </span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full mt-2 px-4 py-3 border border-[#F4F6FF] bg-transparent rounded-lg focus:ring-2 focus:ring-[#F4F6FF] focus:outline-none text-[#F4F6FF] placeholder-[#F4F6FF]/70"
            placeholder="Type your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#10375C] text-[#F4F6FF] py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-[#211951] transition"
        >
          <FaPaperPlane size={18} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
