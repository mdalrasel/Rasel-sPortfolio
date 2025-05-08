import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="px-4 md:px-16 lg:px-32 py-8">
        <Outlet />
      </main>
    </div>
    );
};

export default RootLayout;