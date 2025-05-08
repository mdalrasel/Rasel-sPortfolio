import React from 'react';

const Projects = () => {
    return (
        <section className="max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">WORKS</h2>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white px-3 py-1 rounded-full bg-orange-600">UI/UX</span>
            <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">Live Demo</button>
          </div>
          <h3 className="text-xl font-semibold mb-1">FindMyInterior</h3>
          <p className="text-sm text-gray-300 mb-2">Modern interior design marketplace connecting buyers and sellers across the globe.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Marketplace</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Modern Design</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">E-commerce</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white px-3 py-1 rounded-full bg-emerald-600">Chat</span>
            <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">Live Demo</button>
          </div>
          <h3 className="text-xl font-semibold mb-1">Chatbot with Scoring & Reports</h3>
          <p className="text-sm text-gray-300 mb-2">A friendly chatbot that helps you score and improve different areas of your life through simple conversations.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Chatbot</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Scoring</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Reports</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white px-3 py-1 rounded-full bg-violet-600">Code</span>
            <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">Live Demo</button>
          </div>
          <h3 className="text-xl font-semibold mb-1">DeepBazar</h3>
          <p className="text-sm text-gray-300 mb-2">Full-stack e-commerce platform with modern features and payment integration.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">E-commerce</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Integration</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Modern UI</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white px-3 py-1 rounded-full bg-cyan-600">Code</span>
            <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">Live Demo</button>
          </div>
          <h3 className="text-xl font-semibold mb-1">Picmin</h3>
          <p className="text-sm text-gray-300 mb-2">Advanced image processing and manipulation tools with canvas API.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Canvas</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Editing</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">Image Tool</span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button className="text-sm underline text-white hover:text-indigo-400">Explore All Projects on GitHub</button>
      </div>
    </section>
    );
};

export default Projects;