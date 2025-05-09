import React from 'react';
import { ImCross } from 'react-icons/im';
import { CiEdit, CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const HireForm = ({ onClose }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">Start Your Project</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
                <ImCross className="h-6 w-6"/>
                 
            </button>
        </div>
        <p className="text-gray-300 mb-6">
            Let's discuss how we can collaborate on your next big idea.
        </p>
        <form className="space-y-4" action="#" method="POST">
            <div className="space-y-2">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="w-full px-3 py-3 pl-10 text-gray-100 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800"
                        placeholder="Name"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="sr-only">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CiMail className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-3 py-3 pl-10 text-gray-100 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CiEdit className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        readOnly
                        value="Hire Shariar for a project"
                        className="w-full px-3 py-3 pl-10 text-gray-100 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="projectDetails" className="sr-only">Project Details</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FiFileText className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows="4"
                        className="w-full px-3 py-3 pl-10 text-gray-100 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800"
                        placeholder="Describe your project..."
                    ></textarea>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="w-full py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <IoIosSend className="h-5 w-5 mr-2"/>
                    Send Proposal
                </button>
            </div>
        </form>
    </div>
    );
};

export default HireForm;