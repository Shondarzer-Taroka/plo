

const DiscoverBrandsMen = () => {
    
        const menuItems = [
          { text: 'New In', imgSrc: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_137511599_isisno?&$n_240w$&quot' },
          { text: 'Premium Brands', imgSrc: 'https://images.asos-media.com/navigation/UK_MWPremiumBrands_2M_0824+1_nujuqp?&$n_240w$&quot' },
          { text: 'Outdoor', imgSrc: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_119497936_aeekoa?&$n_240w$&quot' },
          { text: 'Streetwear', imgSrc: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_135806237_pnuedq?&$n_240w$&quot' },
          { text: 'Trainers', imgSrc: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_134837396_hk5jf1?&$n_240w$&quot' },
          { text: 'Emerging Brands', imgSrc: 'https://images.asos-media.com/navigation/mw_gbl_brands_flo_3M_133933561_jbb9st?&$n_240w$&quot' },
        ];
      
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">DISCOVER BRANDS</h2>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <img
                    src={item.imgSrc}
                    alt={item.text}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )
};

export default DiscoverBrandsMen;