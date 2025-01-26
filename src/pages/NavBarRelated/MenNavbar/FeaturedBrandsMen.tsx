

const FeaturedBrandsMen = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">FEATURED</h2>
            <div className="space-y-4">
                <div className=" overflow-hidden relative">
                    <img src="https://images.asos-media.com/navigation/mw_brands_plussizebrands_3WL_123694799?&$n_320w$" alt="Plus Size Brands" className="w-full h-auto" />
                    {/* <div className="p-4"> */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-500/40 via-transparent to-white/50"></div>
                    <h3 className="text-center text-xl font-semibold absolute inset-0 flex items-center justify-center">PLUS SIZE BRANDS</h3>
                    {/* </div> */}
                </div>
                <div className="overflow-hidden relative">
                    <img
                        src="https://images.asos-media.com/navigation/ROW_MWPremiumBrands_3WL_0824+1_xv7hdr?&$n_320w$"
                        alt="Premium Brands"
                        className="w-full h-auto"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-500/50 via-transparent to-white/50"></div>
                    <h3 className="text-center text-xl font-semibold absolute inset-0 flex items-center justify-center text-white">
                        PREMIUM BRANDS
                    </h3>
                </div>


            </div>
        </div>
    );
};

export default FeaturedBrandsMen;