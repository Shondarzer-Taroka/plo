// ShopByMenJewellery

import React from 'react';

const categories = [
  { name: 'View all', image: 'https://images.asos-media.com/navigation/mw_gbl_accessories_viewalljewellery_3M_115211572?&$n_240w$&quot' },
  { name: 'Necklaces', image: 'https://images.asos-media.com/navigation/mw_gbl_accessories_necklaces_3M_119945270?&$n_240w$&quot' },
  { name: 'Rings', image: 'https://images.asos-media.com/navigation/mw_gbl_accessories_rings_3M_114728427?&$n_240w$&quot' },
  { name: 'Bracelets', image: 'https://images.asos-media.com/navigation/mw_gbl_accessories_bracelets_3M_119945292?&$n_240w$&quot' },
  { name: 'Earrings', image: 'https://images.asos-media.com/navigation/mw_gbl_accessories_earrings_3M_113193544?&$n_240w$&quot' },
  { name: 'Stainless Steel', image: 'https://images.asos-media.com/navigation/mw_de_accessories_stainlesssteel_3M_126163695?&$n_240w$&quot' },
];

const ShopByMenJewellery = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">SHOP BY JEWELLERY</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="flex items-center mb-2">
            <img
              src={category.image}
              alt={category.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <span className="text-gray-700">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByMenJewellery;
