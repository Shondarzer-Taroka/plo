import React from 'react';

const ShopByShoes = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">SHOP BY PRODUCT</h2>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h3 className="text-md font-bold mb-2">Top Rated Shoes</h3>
          <h3 className="text-md font-bold mb-2">Selling Fast</h3>
          <ul className="space-y-1">
            <li>View all</li>
            <li>New in</li>
            <li>Trainers</li>
            <li>Boots</li>
            <li>Loafers</li>
            <li>Slippers</li>
            <li>Sandals</li>
            <li>Running Trainers</li>
            <li>Socks</li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-md font-semibold mb-2">Selling Fast</h3>
        </div> */}
      </div>
    </div>
  );
};

export default ShopByShoes;
