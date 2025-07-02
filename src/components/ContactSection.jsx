import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => console.log(error.text));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 inline-flex items-center justify-center gap-3">
          <FaEnvelopeOpenText className="text-purple-400" />
          Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          I’m available for freelance projects, full-time opportunities, or just to chat.
          Feel free to contact me using the form or the details below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Info */}
        <div
          className=" p-8 border rounded-md shadow-md flex flex-col justify-between"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              Hi! I’m Rasel, a passionate Frontend Developer.
              I’m available for freelance projects, full-time roles, or any collaboration.
              Feel free to reach out anytime!
            </p>
            <ul className="space-y-5 text-purple-700 dark:text-purple-300">
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-purple-600 text-lg" />
                <a
                  href="mailto:mdalrasel.dev@gmail.com"
                  className="text-gray-300 hover:text-teal-400"
                >
                  mdalrasel.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-600 text-lg" />
                <a
                  href="tel:+8801681579695"
                  className="text-gray-300 hover:text-teal-400"
                >
                  +880 1681-579695
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp className="text-purple-600 text-lg" />
                <a
                  href="https://wa.me/8801681579695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400"
                >
                  +880 1681-579695
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-600 text-lg" />
                <a
                  href="https://www.google.com/maps/place/Dhaka,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400"
                >
                  Dhaka, Bangladesh
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div
            className="mt-8"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Find me on
            </h3>
            <div className="flex items-center gap-6 text-gray-700 dark:text-gray-200 text-2xl">
              <a
                href="https://github.com/mdalrasel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/mdalrasel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/mdalrasel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className=" p-8 border rounded-md shadow-md"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 h-full flex flex-col justify-between"
          >
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600  text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600  text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600  text-gray-900 dark:text-gray-100 resize-none h-full"
              />
            </div>

            {/* Animated Button */}
            <button
              type="submit"
              data-aos="fade-up"
              data-aos-delay="500"
              className="w-full mt-2 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              {sent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
