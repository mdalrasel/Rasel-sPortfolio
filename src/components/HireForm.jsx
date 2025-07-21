import React, { useRef, useState } from "react";
import { CiEdit, CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";

const HireForm = ({ onClose }) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");
        setErrorMsg("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setLoading(false);
                    setSuccessMsg("Thank you! Your proposal has been sent.");
                    form.current.reset();
                    setTimeout(() => {
                        setSuccessMsg("");
                        onClose();
                    }, 3000);
                    console.log(result);
                },
                (error) => {
                    setLoading(false);
                    setErrorMsg("Oops! Something went wrong. Please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-xl p-6 max-w-md md:max-w-xl w-full mx-4 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Start Your Project</h2>
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="text-gray-400 hover:text-white transition"
                >
                    <ImCross className="w-6 h-6 " />
                </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4">
                Let's discuss how we can collaborate on your next big idea.
            </p>

            {/* Success/Error Messages */}
            {successMsg && (
                <div className="mb-4 p-3 bg-green-600 rounded">{successMsg}</div>
            )}
            {errorMsg && <div className="mb-4 p-3 bg-red-600 rounded">{errorMsg}</div>}

            {/* Form */}
            <form className="space-y-3" ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" /> 
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <CiMail className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    />
                </div>

                {/* Subject */}
                <div className="relative">
                    <CiEdit className="absolute left-3 top-3 text-gray-400" /> 
                    <input
                        type="text"
                        name="subject"
                        defaultValue="Hire Rasel for a project"
                        className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" 
                    />
                </div>

                {/* Project Details */}
                <div className="relative">
                    <FiFileText className="absolute left-3 top-3 text-gray-400" /> 
                    <textarea
                        name="message"
                        placeholder="Describe your project..."
                        rows="4"
                        required
                        className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" 
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2 ${
                        loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                    <IoIosSend className="w-5 h-5" />
                    {loading ? "Sending..." : "Send Proposal"}
                </button>
            </form>
        </div>
    );
};

export default HireForm;