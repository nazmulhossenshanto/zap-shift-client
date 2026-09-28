 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png"; 
import { MoveUpRightIcon } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <Carousel
        autoPlay={false}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={2000}
        transitionTime={500}
      >
        <div>
          <img className="relative" src={bannerImg1} alt="Delivery service banner" />
          <div className="absolute bottom-15 left-10 flex justify-center items-center gap-2">
            <button className="btn btn-outline rounded-full border-none hover:bg-primary">Track Your Parcel</button>
            <button className="text-primary bg-black rounded-full p-2"><MoveUpRightIcon /></button>
            <button className="btn btn-outline">Be A Rider</button>
          </div>
        </div>

        <div>
          <img src={bannerImg2} alt="Fast delivery service banner" />
        </div>

        <div>
          <img src={bannerImg3} alt="Safe delivery service banner" />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
 
