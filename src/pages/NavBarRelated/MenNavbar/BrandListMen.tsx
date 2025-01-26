const brands = [
    { name: 'View all', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_137545238_zckyga?&$n_240w$&quot' },
    { name: 'ASOS DESIGN', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_135373757_qt6zfj?&$n_240w$&quot' },
    { name: 'ASOS 4505', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_134224288_zousyu?&$n_240w$&quot' },
    { name: 'Topman', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_135601389_gkqcr8?&$n_240w$&quot' },
    { name: 'COLLUSION', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_134391391_cazlmf?&$n_240w$&quot' },
    { name: 'Reclaimed Vintage', img: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_135870949_agemi8?&$n_240w$&quot' },
];

const BrandListMen = () => {
    return (
        <div className="">
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