const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-10 lg:mt-0 w-full ">
      <h2 className="text-xl font-bold text-gray-800">Quick Touch</h2>
      <form className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-medium"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            placeholder="Type your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg font-bold hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
