// import React from 'react';

// const FashionStyles = () => {
//   return (
//     <div className="flex justify-around">
//       <div className="w-1/3 p-4">
//         <div className="relative">
//           <img
//             src="https://images.asos-media.com/navigation/uk_mw_nav_hero_01_1680x876_potlvs?&$n_320w$"
//             alt="Spring Preview"
//             className="w-full h-auto object-cover"
//           />
//           <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
//             SPRING PREVIEW
//           </div>
//         </div>
//       </div>
//       <div className="w-1/3 p-4">
//         <div className="relative">
//           <img
//             src="https://images.asos-media.com/navigation/uk_mw_nav_hero_02_1680x876_11_zzhp57?&$n_320w$"
//             alt="Transitional Styles"
//             className="w-full h-auto object-cover"
//           />
//           <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
//             TRANSITIONAL STYLES
//           </div>
//         </div>
//       </div>
//       <div className="w-1/3 p-4">
//         <div className="relative">
//           <img
//             src="https://images.asos-media.com/navigation/uk_mw_nav_hero_03_1680x876_hbq3kx?&$n_320w$"
//             alt="90s Luxe"
//             className="w-full h-auto object-cover"
//           />
//           <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
//             90S LUXE
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FashionStyles;



import React from 'react';

const FashionStyles = () => {
  const cards = [
    {
      image: 'https://images.asos-media.com/navigation/136403425_1134+1_wteqwy?&$n_320w$', // Replace with actual image URLs
      title: 'SPRING PREVIEW',
    },
    {
      image: 'https://images.asos-media.com/navigation/138781225_6375+1_i4wj6t?&$n_320w$', // Replace with actual image URLs
      title: 'BASICS REFRESH',
    },
    {
      image: 'https://images.asos-media.com/navigation/90sluxe_web_cz9eqg?&$n_320w$', // Replace with actual image URLs
      title: '90S LUXE',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative  h-[400px] rounded-lg overflow-hidden shadow-lg group"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white font-bold text-lg bg-black bg-opacity-50 px-2 py-1 rounded">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionStyles;
