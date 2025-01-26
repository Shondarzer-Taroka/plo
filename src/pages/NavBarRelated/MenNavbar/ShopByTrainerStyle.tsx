
const ShopByTrainerStyle = () => {
  const styles = [
    'adidas Originals Campus',
    'ON Cloudnova',
    'Reebok Club Classic',
    'Vans Old Skool',
    'adidas Originals Stan Smith',
    'New Balance 574',
    'New Balance 530',
    'adidas Originals Gazelle',
    'New Balance 550',
    'ON Cloudmonster',
  ];

  return (
    <div className="p-4 max-w-sm">
      <h2 className="text-lg font-bold mb-4">
        SHOP BY TRAINER STYLE
      </h2>
      <ul className="space-y-2 text-gray-700">
        {styles.map((style, index) => (
          <li key={index} className="hover:text-gray-900 cursor-pointer">
            {style}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByTrainerStyle;
