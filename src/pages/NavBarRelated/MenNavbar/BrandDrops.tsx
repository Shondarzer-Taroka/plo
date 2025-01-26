import React from 'react';

const BrandDrops = () => {
  const brands = [
    { name: 'ASOS DESIGN', img: 'path/to/asos-design-image.jpg' },
    { name: 'adidas', img: 'path/to/adidas-image.jpg' },
    { name: 'British Brands', img: 'path/to/british-brands-image.jpg' },
    { name: 'New Balance', img: 'path/to/new-balance-image.jpg' },
    { name: 'New Look', img: 'path/to/new-look-image.jpg' },
    { name: 'The North Face', img: 'path/to/the-north-face-image.jpg' },
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
