const Contact = () => {
    return (
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-emerald-400">Contact Me</h2>
        <form className="space-y-4 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  