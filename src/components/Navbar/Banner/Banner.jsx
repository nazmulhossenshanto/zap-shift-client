 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <section>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={2000}
        transitionTime={500}
      >
        <div>
          <img src={bannerImg1} alt="Delivery service banner" />
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
 
