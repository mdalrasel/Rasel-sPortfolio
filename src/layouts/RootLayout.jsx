import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="pt-16 w-11/12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;