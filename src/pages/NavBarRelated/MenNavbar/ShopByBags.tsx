import React from 'react';


const ShopByBags = () => {
  const categories = [
    { name: 'View all', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_133812896?&$n_240w$&quot' },
    { name: 'Wallets', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_130440701?&$n_240w$&quot' },
    { name: 'Backpacks', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_132690334?&$n_240w$&quot' },
    { name: 'Duffle bags', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_133491357?&$n_240w$&quot' },
    { name: 'Bum bags', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_120641389?&$n_240w$&quot' },
    { name: 'Shopper bags', icon: 'https://images.asos-media.com/navigation/mw_glbl_accessoriessbb_courtney_3M_133534295?&$n_240w$&quot' },
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SHOP BY BAGS</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex items-center mb-2">
            <img src={category.icon} alt={category.name} className="w-10 h-10 rounded-full mr-4 " />
            <span className="text-gray-700">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByBags;
