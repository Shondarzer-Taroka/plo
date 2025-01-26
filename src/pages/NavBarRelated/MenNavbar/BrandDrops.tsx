import React from 'react';

const BrandDrops = () => {
  const brands = [
    { name: 'ASOS DESIGN', img: 'https://images.asos-media.com/navigation/mw_uk_newin_asosdesign_3m_117590750?&$n_240w$&quot' },
    { name: 'adidas', img: 'https://images.asos-media.com/navigation/mw_uk_newin_adidas_3m_121949817?&$n_240w$&quot' },
    { name: 'British Brands', img: 'https://images.asos-media.com/navigation/mw_newin_britishbrands_3M_124199441?&$n_240w$&quot' },
    { name: 'New Balance', img: 'https://images.asos-media.com/navigation/mw_newin_newbalance_3M_121808719?&$n_240w$&quot' },
    { name: 'New Look', img: 'https://images.asos-media.com/navigation/mw_newinnewlook_3M_127354423?&$n_240w$&quot' },
    { name: 'The North Face', img: 'https://images.asos-media.com/navigation/mw_newin_thenorthface_3M_120001226?&$n_240w$&quot' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">BRAND DROPS</h2>
      <ul>
        {brands.map((brand, index) => (
          <li key={index} className="flex items-center mb-4">
            <img
              src={brand.img}
              alt={brand.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg">{brand.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandDrops;
