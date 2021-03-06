import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import zdjecie1 from "../../images/metamorfoza1.png";
import zdjecie2 from "../../images/metamorfoza2.png";
import zdjecie3 from "../../images/metamorfoza3.png";
import zdjecie4 from "../../images/metamorfoza4.png";

const ResponsiveCarousel = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={false}>
      <div>
        <img src={zdjecie1} alt="Michal Wojcieszak metamorfoza 1" />
        {/*<p className="legend">Legend 1</p>*/}
      </div>
      <div>
        <img src={zdjecie2} alt="Michal Wojcieszak metamorfoza 2" />
      </div>
      <div>
        <img src={zdjecie3} alt="Michal Wojcieszak metamorfoza 3" />
      </div>
      <div>
        <img src={zdjecie4} alt="Michal Wojcieszak metamorfoza 4" />
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousel;
