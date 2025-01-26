import React from 'react';

const brands = [
  { name: 'ASOS DESIGN', img: 'https://images.asos-media.com/navigation/mw_asosdesign_shoes_gbl_2m_133887737?&$n_240w$&quot' },
  { name: 'New Balance', img: 'https://images.asos-media.com/navigation/newbalance_shoes_gbl_2m_116525071?&$n_240w$&quot' },
  { name: 'On Running', img: 'https://images.asos-media.com/navigation/mw_trainers_onrunning_3M_117429267?&$n_240w$&quot' },
  { name: 'adidas', img: 'https://images.asos-media.com/navigation/mw_gbl_shoes_adidas_3M_123114802?&$n_240w$&quot' },
  { name: 'Asics', img: 'https://images.asos-media.com/navigation/mw_gbl_shoes_asics_3M_120053713?&$n_240w$&quot' },
  { name: 'Dr Martens', img: 'https://images.asos-media.com/navigation/drmartens_2024_gcbbfi?&$n_240w$&quot' },
];

const ShopByBrand = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">SHOP BY BRAND</h2>
      <ul>
        {brands.map((brand, index) => (
          <li key={index} className="flex items-center mb-4">
            <img src={brand.img} alt={brand.name} className="w-10 h-10 rounded-full mr-4" />
            <span className="text-gray-700">{brand.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByBrand;
