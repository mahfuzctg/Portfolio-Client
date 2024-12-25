import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-10 lg:mt-0 w-full max-w-lg mx-auto">
      <h2 className="text-center font-bold text-gray-800 flex items-center space-x-2">
        ✨<span>QUICK TOUCH</span>
      </h2>

      <form className="mt-6 space-y-6">
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            <span className="flex items-center space-x-2">
              <FaEnvelope size={18} className="text-pink-600" />
              <span>Email</span>
            </span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none text-gray-800"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-medium"
          >
            <span className="flex items-center space-x-2">
              <span role="img" aria-label="message" className="text-pink-600">
                💬
              </span>
              <span>Your Message</span>
            </span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none text-gray-800"
            placeholder="Type your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-pink-700 transition"
        >
          <FaPaperPlane size={18} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
