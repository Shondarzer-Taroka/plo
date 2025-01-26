import React from "react";
import { Link } from "react-router-dom";
import BrandDrops from "./BrandDrops";
import NewEdits from "./NewEdits";
import ShopByProduct from "./ShopByProduct";
import ShopByBodyFit from "./ShopByBodyFit";

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
                    <div className="bg-gray-menNew">
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



                                <div className="flex flex-col items-center p-4">
                                    <h1 className="text-xl font-bold mb-4">SHOP VALENTINES</h1>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                                <img src="https://images.asos-media.com/navigation/MW+date+night+fits_dxxyhe?&$n_240w$&quot" alt="Date-night 'Fits" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-center">Date-night 'Fits</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                                <img src="https://images.asos-media.com/navigation/MW+satin+velvet_b2bbxx?&$n_240w$&quot" alt="Satin & Velvet" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-center">Satin & Velvet</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                                <img src="https://images.asos-media.com/navigation/MW+brands_ea5v1h?&$n_240w$&quot" alt="Premium Brands" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-center">Premium Brands</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                                <img src="https://images.asos-media.com/navigation/MW+vday+gifts_cd8ree?&$n_240w$&quot" alt="Gifts for Him" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-center">Gifts for Him</p>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <BrandDrops />
                                </div>

                                <div>
                                    <NewEdits />
                                </div>
                            </aside>
                        </div>
                    </div>

                </Link>
                <Link to={'/men'} className=" menClothingParent hover:text-gray-400 px-3 hover:bg-white hover:h-full flex items-center justify-center">
                    Clothing
                    <div>
                        <div className="menClothing">
                            <aside className="grid grid-cols-3 gap-4">
                                <div className="p-4">
                                 <ShopByProduct/>
                                </div>



                                <div className="flex flex-col items-center p-4">
                                   <ShopByBodyFit/>
                                </div>


                                <div>
                                    <BrandDrops />
                                </div>

                                <div>
                                    <NewEdits />
                                </div>
                            </aside>
                        </div>
                    </div>
                </Link>
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
