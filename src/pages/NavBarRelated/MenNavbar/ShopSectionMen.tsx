
const ShopSectionMen = () => {
   return (
        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2">
                <h2 className="text-lg font-bold mb-4">SHOP BY EDIT</h2>
                <div className="flex flex-col space-y-4">
                    <div className="relative">
                        <img src="https://images.asos-media.com/navigation/mw_run_club_january_2WL_qifg6t?&$n_320w$" alt="Run Club" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-[#00000077]">
                            <span className="text-white text-xl font-bold">RUN CLUB</span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.asos-media.com/navigation/mw_train_january_2WL_kunqo7?&$n_320w$" alt="Train" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-[#00000077]">
                            <span className="text-white text-xl font-bold">TRAIN</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
                <h2 className="text-lg font-bold mb-4">SHOP BY BRAND</h2>
                <div className="flex flex-col space-y-4">
                    <div className="relative">
                        <img src="https://images.asos-media.com/navigation/mw_asos_4505_january_2WL_vtn5sm?&$n_320w$" alt="ASOS 4505" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-[#00000077]">
                            <span className="text-white text-xl font-bold">ASOS 4505</span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.asos-media.com/navigation/mw_adidas_2WL_v1x3ms?&$n_320w$" alt="Adidas Performance" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000077]">
                            <span className="text-white text-xl font-bold">  ADIDAS</span>
                            <span className="text-white text-xl font-bold">  PERFORMANCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSectionMen;