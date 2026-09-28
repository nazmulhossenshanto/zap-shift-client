import { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div className="my-10">
      <div className="text-center mb-24">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro
          eaque quis tempore beatae, eum consectetur quos sapiente totam
          similique labore. Quibusdam, numquam in consectetur nobis nihil ipsam
          neque sint.
        </p>

        
      </div>
      <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: '50%',
            depth: 80,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
            breakpoints={{
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
          className="mySwiper h-80"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Reviews;
