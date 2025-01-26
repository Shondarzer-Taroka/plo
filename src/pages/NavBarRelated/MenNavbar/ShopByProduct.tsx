import React from 'react';

const ShopByProduct = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">SHOP BY PRODUCT</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-md font-semibold mb-2">Top Rated Clothing</h3>
          <ul className="space-y-1">
            <li>New in</li>
            <li>T-Shirts & Vests</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Jumpers & Cardigans</li>
            <li>Jeans</li>
            <li>Shirts</li>
            <li>Trousers & Chinos</li>
            <li>Loungewear</li>
            <li>Underwear</li>
            <li>Activewear</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>Cargo Trousers</li>
            <li>Co-ords</li>
            <li>Joggers</li>
            <li>Last chance to buy</li>
            <li>Multipacks</li>
            <li>Polo shirts</li>
            <li>Premium</li>
            <li>Shorts</li>
            <li>Socks</li>
            <li>Suits & Tailoring</li>
            <li>Swimwear</li>
            <li>Tracksuits</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopByProduct;
