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
                <Link to={'/men'} className="hover:text-gray-400 menNewParent px-3 hover:bg-white hover:h-full flex items-center justify-center">
                    New in
                    <div className="menNew">
                        <aside className="grid grid-cols-4 gap-4">
                            <div className="p-4">
                                <h2 className="font-bold text-lg mb-4">NEW PRODUCTS</h2>
                                <ul className="space-y-2">
                                    <li className="text-gray-700">View all</li>
                                    <li className="text-gray-700">Clothing</li>
                                    <li className="text-gray-700">Shoes</li>
                                    <li className="font-bold text-gray-900">New in: Today</li>
                                    <li className="font-bold text-gray-900">New In: Selling Fast</li>
                                    <li className="text-gray-700">T-Shirts & Vests</li>
                                    <li className="text-gray-700">Coats & Jackets</li>
                                    <li className="text-gray-700">Hoodies & Sweatshirts</li>
                                    <li className="text-gray-700">Activewear</li>
                                    <li className="text-gray-700">Jumpers</li>
                                    <li className="text-gray-700">Jeans & Trousers</li>
                                    <li className="text-gray-700">Accessories</li>
                                    <li className="text-gray-700">Underwear</li>
                                </ul>
                            </div>



                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-bold mb-4">SHOP VALENTINES</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                            <img src="date-night-fits.jpg" alt="Date-night 'Fits" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-center">Date-night 'Fits</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                            <img src="satin-velvet.jpg" alt="Satin & Velvet" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-center">Satin & Velvet</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                            <img src="premium-brands.jpg" alt="Premium Brands" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-center">Premium Brands</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                            <img src="gifts-for-him.jpg" alt="Gifts for Him" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-center">Gifts for Him</p>
                                    </div>
                                </div>
                            </div>


                            
                        </aside>
                    </div>
                </Link>
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
