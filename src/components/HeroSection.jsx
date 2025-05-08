import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div
                className="flex flex-col md:flex-row items-center justify-between gap-10"
                data-aos="fade-up"
            >
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Hi, I’m <span className="text-emerald-400">Russel</span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        A Frontend Developer specialized in React, Tailwind & UI/UX.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold shadow-lg transition">
                        View Projects
                    </button>
                </div>
                <div>
                    <img
                        src="https://i.ibb.co.com/0js87zgk/Whats-App-Image-2024-06-01-at-10-55-25-bbda0a5e.jpg"
                        alt="Russel"
                        className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-emerald-500"
                    />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;