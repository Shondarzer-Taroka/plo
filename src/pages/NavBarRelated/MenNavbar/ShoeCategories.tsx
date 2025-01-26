import React from 'react';

const ShoeCategories = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="relative">
        <img 
          src="https://images.asos-media.com/navigation/mw_GBL_Shoes_Black_Trainers_4WL_127380178?&$n_320w$" 
          alt="Black Trainers"
          className="w-[300px] h-[80px] object-cover"
        />
        <span className="text-xl font-bold absolute top-[28px] text-black">BLACK TRAINERS</span>
      </div>
      <div className="relative">
        <img 
          src="https://images.asos-media.com/navigation/mw_gbl_shoes_ocassionshoes_4WL_135425212_pgdpli?&$n_320w$" 
          alt="Occasion Shoes"
          className="w-[300px] h-[80px] object-cover"
        />
        <span className="text-xl font-bold absolute top-[28px] text-black">OCCASION SHOES</span>
      </div>
      <div className="relative">
        <img 
          src="https://images.asos-media.com/navigation/mw_chelsea_boots_4WL_ixmzi1?&$n_320w$" 
          alt="Chelsea Boots"
          className="w-[300px] h-[80px] object-cover"
        />
        <span className="text-xl font-bold absolute top-[28px] text-black">CHELSEA BOOTS</span>
      </div>
    </div>
  );
};

export default ShoeCategories;











// import React from 'react';

// const ShoeCategories = () => {
//   return (
//     <div className="flex flex-col space-y-4 p-4">
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img 
//             src="https://images.asos-media.com/navigation/mw_GBL_Shoes_Black_Trainers_4WL_127380178?&$n_320w$"
//             alt="Black Trainers"
//             className="w-32 h-32 object-cover"
//           />
//           <div className="absolute bottom-2 left-2 bg-black text-white text-sm p-1 bg-opacity-75">
//             BLACK TRAINERS
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img 
//             src="https://images.asos-media.com/products/occasion-shoes/228532232-1"
//             alt="Occasion Shoes"
//             className="w-32 h-32 object-cover"
//           />
//           <div className="absolute bottom-2 left-2 bg-black text-white text-sm p-1 bg-opacity-75">
//             OCCASION SHOES
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img 
//             src="https://images.asos-media.com/products/chelsea-boots/217821120-1-black"
//             alt="Chelsea Boots"
//             className="w-32 h-32 object-cover"
//           />
//           <div className="absolute bottom-2 left-2 bg-black text-white text-sm p-1 bg-opacity-75">
//             CHELSEA BOOTS
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoeCategories;
