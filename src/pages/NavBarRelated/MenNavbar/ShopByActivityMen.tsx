
const ShopByActivityMen = () =>{
    const activities = [
      { name: 'Ski & Snowboard', image: 'https://images.asos-media.com/navigation/MW+ski_oowr7a?&$n_240w$&quot' },
      { name: 'Gym & Training', image: 'https://images.asos-media.com/navigation/sportswear_gbl_mw_awm_gym_3m?&$n_240w$&quot' },
      { name: 'Running', image: 'https://images.asos-media.com/navigation/sportswear_gbl_mw_awm_run_2m?&$n_240w$&quot' },
      { name: 'Outdoors', image: 'https://images.asos-media.com/navigation/mw_global_awm_the_north_face_480x480?&$n_240w$&quot' },
      { name: 'Football', image: 'https://images.asos-media.com/navigation/mw_football_3m_xwuuzp?&$n_240w$&quot' },
      { name: 'Swim', image: 'https://images.asos-media.com/navigation/sportswear_gbl_mw_awm_swim_3m?&$n_240w$&quot' },
    ];
  
    return (
      <div>
        <h2 className="text-lg font-bold mb-6">SHOP BY ACTIVITY</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center mb-4">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="text-gray-700">{activity.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ShopByActivityMen;