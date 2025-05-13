// src/components/Reviews.jsx
import { useTranslation } from "react-i18next";
import { reviews } from "@/data";
import ReviewCard from "../card/ReviewCard";
import { Container } from "../container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const Reviews = () => {
  const { t } = useTranslation();

  return (
    <div className="reviews bg-black pt-[129px] pb-20">
      <Container>
        <h4 className="font-bold text-[23px] text-safron uppercase mb-5">
          {t("reviews")}
        </h4>

        {/* Slider */}
        <div className="relative">
          <Swiper
            className="reviews-swiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={45}
            navigation
            pagination={{
              el: ".external-swiper-pagination",
              clickable: true,
              renderBullet: (_idx, className) =>
                `<span class="${className} 
                              !inline-block 
                              !w-3 
                              !h-3 
                              !rounded-full 
                              !border-2 
                              !border-safron 
                              !mx-2 
                              !bg-transparent 
                              !opacity-100"></span>`,
              renderBulletActive: (_idx, className) =>
                `<span class="${className} 
                              !inline-block 
                              !w-3 
                              !h-3 
                              !rounded-full 
                              !border-2 
                              !border-safron 
                              !mx-2 
                              !bg-safron 
                              !opacity-100"></span>`,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40 },
              1536: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 50 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <ReviewCard review={r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="external-swiper-pagination flex justify-center mt-8"></div>
      </Container>
    </div>
  );
};

export default Reviews;
