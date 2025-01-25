import React from "react";
import { Link } from "react-router-dom";

export default function MenNavbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex items-center space-x-6 px-6 h-[60px] border-b-2 border-yellow-400">
        <Link
          to="/"
          className="bg-red-500 h-full font-bold uppercase text-center flex items-center justify-center skew-x-[-15deg] px-4 text-white"
        >
          <span className="skew-x-[15deg]">Sale</span>
        </Link>
        <a href="#" className="hover:text-gray-400 px-3 hover:bg-white hover:h-full flex items-center justify-center">
          New in
        </a>
        <a href="#" className="hover:text-gray-400 px-3 hover:bg-white hover:h-full flex items-center justify-center">
          Clothing
        </a>
        <a href="#" className="hover:text-gray-400 px-3 hover:bg-white hover:h-full flex items-center justify-center">
          Trending
        </a>
        <a href="#" className="hover:text-gray-400 px-3 hover:bg-white hover:h-full flex items-center justify-center">
          Dresses
        </a>
        <a href="#" className="hover:text-gray-400">
          Shoes
        </a>
        
        <a href="#" className="hover:text-gray-400">
          Accessories
        </a>
        <a href="#" className="hover:text-gray-400">
          Brands
        </a>
        <a href="#" className="hover:text-gray-400">
          Activewear
        </a>
        <a href="#" className="hover:text-gray-400">
          Gromming
        </a>
        <a href="#" className="hover:text-gray-400">
          Topman
        </a>
        <a href="#" className="hover:text-gray-400">
          Marketplace
        </a>
      </div>
    </nav>
  );
}
