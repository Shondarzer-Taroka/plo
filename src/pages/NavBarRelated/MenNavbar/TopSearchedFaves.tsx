import React from 'react';

const TopSearchedFaves = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">TOP-SEARCHED FAVES</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://images.asos-media.com/navigation/mw_uk_summer_shop_graphic_tees_2305_sb_3m?&$n_240w$&quot"
          alt="Graphic tees"
          className="w-12 h-12 rounded-full mr-4"
        />
        <span>Graphic tees</span>
      </div>
      <div className="flex items-center mb-4">
        <img
          src="https://images.asos-media.com/navigation/138781225_6375+1_i4wj6t?&$n_240w$&quot"
          alt="Basics"
          className="w-12 h-12 rounded-full mr-4"
        />
        <span>Basics</span>
      </div>
      <div className="flex items-center">
        <img
          src="https://images.asos-media.com/navigation/mw_uk_hero_burgundy_01_240x240_050910205_aaao0e?&$n_240w$&quot"
          alt="Burgundy"
          className="w-12 h-12 rounded-full mr-4"
        />
        <span>Burgundy</span>
      </div>
    </div>
  );
};

export default TopSearchedFaves;
