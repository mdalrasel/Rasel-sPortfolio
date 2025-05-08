import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Typewriter from "typewriter-effect";
import { RiDownload2Fill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center  bg-[#0f172a] py-12">
      <div className="flex-1">
        <p className="text-sm text-purple-300 mb-2">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Hi, I'm <span className="text-purple-500">Rasel</span>
        </h1>
        <div className="text-xl text-gray-300 h-20">
          <Typewriter
            options={{
              strings: [
                "I design intuitive UI/UX",
                "I build responsive React apps",
                "Expert in Tailwind CSS",
                "Firebase Auth Integration",
                "Clean & Maintainable Code"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition flex items-center gap-2">
          <BiSolidShoppingBags /> Hire Me
          </button>
          <button className="px-6 py-3 bg-gray-700 flex items-center gap-2 hover:bg-gray-600 text-white font-semibold rounded-2xl transition">
          <RiDownload2Fill /> Download Resume
          </button>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Available for freelance and full-time opportunities
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-600">
          <img
            src="https://i.ibb.co.com/spLJ1q8s/banner-img.png"
            alt="Russel"
            className="w-80 h-[440px] object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
            1+ Year Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;