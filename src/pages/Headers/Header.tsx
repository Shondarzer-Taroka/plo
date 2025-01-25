
// import { Search, User, Heart, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="bg-black text-white flex items-center justify-between px-6 py-4">
//       {/* Logo and navigation */}
//       <div className="flex items-center space-x-6">
//         <div className="text-2xl font-bold">asos</div>
//         <nav className="flex space-x-4">
//           <Link to={'/women'} className="uppercase text-sm hover:text-gray-400">
//             Women
//           </Link>
//           <Link to={'/men'} className="uppercase text-sm hover:text-gray-400">
//             Men
//           </Link>
//         </nav>
//       </div>

//       {/* Search bar */}
//       <div className="flex-1 max-w-lg mx-4 bg-white rounded-full">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search for items and brands"
//             className="w-full py-2 px-4 pl-12 rounded-full text-gray-800 focus:outline-none"
//           />
//           <Search className="absolute top-2 left-4 text-gray-500" />
//         </div>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-6">
//         <User className="hover:text-gray-400 cursor-pointer" />
//         <Heart className="hover:text-gray-400 cursor-pointer" />
//         <ShoppingBag className="hover:text-gray-400 cursor-pointer" />
//       </div>
//     </header>
//   );
// }









import { useLocation } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  // Get the current location (URL path)
  const location = useLocation();

  return (
    <header className="bg-black text-white flex items-center justify-between px-6 py-">
      {/* Logo and navigation */}
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold">asos</div>
        <nav className="flex space-x-4">
          <Link
            to="/women"
            className={`uppercase text-sm hover:text-gray-400 ${
              location.pathname === "/women"
                ? "bg-white py-6 text-black"
                : "text-white"
            } flex items-center px-4`}
          >
            Women
          </Link>
          <Link
            to="/men"
            className={`uppercase text-sm hover:text-gray-400 ${
              location.pathname === "/men"
                ? "bg-white py-6 text-black"
                : "text-white"
            } flex items-center px-6`}
          >
            Men
          </Link>
        </nav>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-lg mx-4 bg-white rounded-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for items and brands"
            className="w-full py-2 px-4 pl-12 rounded-full text-gray-800 focus:outline-none"
          />
          <Search className="absolute top-2 left-4 text-gray-500" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <User className="hover:text-gray-400 cursor-pointer" />
        <Heart className="hover:text-gray-400 cursor-pointer" />
        <ShoppingBag className="hover:text-gray-400 cursor-pointer" />
      </div>
    </header>
  );
}

