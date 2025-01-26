import React from 'react';

const ShopByBodyFit = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">SHOP BY BODY FIT</h2>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
            <img
              src="https://images.asos-media.com/navigation/mw_uk_clothing_tall_2m_132163877?&$n_240w$&quot"
              alt="Plus Size"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-600">Plus Size</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
            <img
              src="https://images.asos-media.com/navigation/mw_uk_clothing_plussize_2m_120975115?&$n_240w$&quot"
              alt="Tall"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-600">Tall</span>
        </div>
      </div>
    </div>
  );
};

export default ShopByBodyFit;
