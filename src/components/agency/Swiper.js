import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import catData from "../../assets/DB/catData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const SwiperCom = ({ path }) => {
  const [data, setData] = useState(catData);
  return (
    <div className="swiper_com">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="swiper_wrap">
        {data.map((cat) => (
          <SwiperSlide className="swiper_slider" key={cat.id}>
            <img src={path + cat.image} alt={cat.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p>Types of clients we want to work</p>
    </div>
  );
};

export default SwiperCom;
