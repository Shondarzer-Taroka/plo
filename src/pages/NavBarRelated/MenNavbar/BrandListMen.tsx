const brands = [
    { name: 'View all', img: 'path/to/view-all-image.jpg' },
    { name: 'ASOS DESIGN', img: 'path/to/asos-design-image.jpg' },
    { name: 'ASOS 4505', img: 'path/to/asos-4505-image.jpg' },
    { name: 'Topman', img: 'path/to/topman-image.jpg' },
    { name: 'COLLUSION', img: 'path/to/collusion-image.jpg' },
    { name: 'Reclaimed Vintage', img: 'path/to/reclaimed-vintage-image.jpg' },
];

const BrandListMen = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">ASOS BRANDS</h2>
            <ul>
                {brands.map((brand, index) => (
                    <li key={index} className="flex items-center mb-4">
                        <img
                            src={brand.img}
                            alt={brand.name}
                            className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="text-gray-700">{brand.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandListMen;