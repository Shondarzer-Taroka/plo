import React from 'react';

const FeaturedProductsMen = () => {

    const products = [
        {
          name: "Jeans",
          image: "https://images.asos-media.com/navigation/136675703_winter_accessories_mw_gj5si3?&$n_320w$"
        },
      ];




   return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">FEATURED PRODUCTS</h2>
      <div className="grid gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 top-0 flex items-center justify-center flex-col w-full h-full bg-[#00000024] p-2 ">
              <p className="text-white">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsMen;