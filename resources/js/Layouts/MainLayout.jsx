// resources/js/Layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../Components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}