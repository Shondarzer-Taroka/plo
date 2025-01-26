

const TopBrandsMen = () => {
    const brands = [
        "Calvin Klein",
        "Carhartt WIP",
        "New Balance",
        "New Era",
        "On running",
        "Polo Ralph Lauren",
        "Puma",
        "The North Face",
        "Jack & Jones",
        "adidas"
    ];
    return (
        <div className="">
            <h2 className="text-lg font-bold">TOP BRANDS</h2>
            <h3 className="text-md font-semibold text-gray-600 mt-2">A-Z of brands</h3>
            <ul className="mt-2 space-y-1">
                {brands.map((brand, index) => (
                    <li key={index} className="text-gray-700">
                        {brand}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopBrandsMen;