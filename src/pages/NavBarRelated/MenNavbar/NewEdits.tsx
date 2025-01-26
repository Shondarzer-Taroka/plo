// import React from 'react';

// const NewEdits = () => {
//   return (
//     <div className="p-4">
//       <h2 className="font-bold text-lg mb-4">NEW EDITS</h2>
//       <div className="grid gap-4">
//         <div className="relative">
//           <img
//             src="https://images.asos-media.com/navigation/uk_mw_nav_hero_01_1680x876_potlvs?&$n_320w$"
//             alt="Spring Preview"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-4 left-4 p-2">
//             <p className="text-white">SPRING PREVIEW</p>
//           </div>
//         </div>
//         <div className="relative">
//           <img
//             src="https://images.asos-media.com/navigation/uk_mw_nav_hero_02_1680x876_11_zzhp57?&$n_320w$"
//             alt="Transitional Styles"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-4 left-4 ">
//             <p className="text-white">TRANSITIONAL STYLES</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewEdits;









import React from 'react';

const NewEdits = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">NEW EDITS</h2>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            src="https://images.asos-media.com/navigation/uk_mw_nav_hero_01_1680x876_potlvs?&$n_320w$"
            alt="Spring Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#000000] bg-opacity-50 transition-opacity opacity-25"></div>
          <div className="absolute bottom-4 left-4 p-2">
            <p className="text-white">SPRING PREVIEW</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.asos-media.com/navigation/uk_mw_nav_hero_02_1680x876_11_zzhp57?&$n_320w$"
            alt="Transitional Styles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-25"></div>
          <div className="absolute bottom-4 left-4 ">
            <p className="text-white">TRANSITIONAL STYLES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEdits;
