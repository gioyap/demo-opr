import React from "react";

const Headbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      {/* Logo on the Left */}
      <a href="/" className="text-xl font-bold">LOGO</a>

      {/* Email Me Button on the Right */}
      <a
        href="mailto:gioedrian.yap.l@example.com" 
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
      >
        Request Demo
      </a>
    </header>
  );
};

export default Headbar;
