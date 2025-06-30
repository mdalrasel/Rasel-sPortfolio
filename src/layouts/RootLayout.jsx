import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RootLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="pt-16 w-11/12 mx-auto min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
