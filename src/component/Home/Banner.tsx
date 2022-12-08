import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../store/hooks";
import { Autoplay, SwiperOptions } from "swiper";
const Banner = () => {
  const { data } = useAppSelector((state) => state.homeReducer);
  const option: SwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      disableOnInteraction: false,
    },
    effect: "slide",
    speed: 1000,
    touchMoveStopPropagation: false,
  };
  return (
    <div>
      <Swiper {...option}>
        {data?.dataBanner?.map((item) => (
          <SwiperSlide key={item.product_id}>
            <div className="w-full">
              <img
                src={item.image}
                className="w-full rounded-2xl"
                alt="banner"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
