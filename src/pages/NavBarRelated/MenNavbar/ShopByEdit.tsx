import React from 'react';

const ShopByEdit = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">SHOP BY EDIT</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 flex flex-col items-center rounded-lg">
          <div className="w-24 h-24 mb-2">
            <img
              src="https://images.asos-media.com/navigation/mw_clothing_holiday_3m_118685877?&$n_240w$&quot"
              alt="Holiday"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-700">Holiday</p>
        </div>
        <div className="p-4 bg-gray-100 flex flex-col items-center rounded-lg">
          <div className="w-24 h-24 mb-2">
            <img
              src="https://images.asos-media.com/navigation/mw_gbl_coatswk11_2m?&$n_240w$&quot"
              alt="Winter Essentials"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-700">Winter Essentials</p>
        </div>
        <div className="p-4 bg-gray-100 flex flex-col items-center rounded-lg">
          <div className="w-24 h-24 mb-2">
            <img
              src="https://images.asos-media.com/navigation/138781225_6375+2_w1tzlv?&$n_240w$&quot"
              alt="Basics"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-700">Basics</p>
        </div>
        <div className="p-4 bg-gray-100 flex flex-col items-center rounded-lg">
          <div className="w-24 h-24 mb-2">
            <img
              src="https://images.asos-media.com/navigation/mw_gbl_clothing_occasionwear_flo_105399272_3m?&$n_240w$&quot"
              alt="Occasionwear"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-700">Occasionwear</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByEdit;
