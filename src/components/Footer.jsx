import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 flex-col md:flex-row gap-5 md:gap-2 py-4 shadow-sm  flex items-center justify-between bg-gray-50">
      <div className="flex items-center gap-4">
       
        <img src="/logoloom.png" alt="logo" className="w-32 rounded-sm md:w-48" />
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500" />
        </a>
      </div>

      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Logo Loom. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
