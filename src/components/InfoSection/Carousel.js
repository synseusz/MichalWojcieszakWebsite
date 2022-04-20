import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselIMG, CarouselIMGcontainer } from './InfoElements';


import zdjecie1 from '../../images/metamorfoza1.png'
import zdjecie2 from '../../images/metamorfoza2.png'
import zdjecie3 from '../../images/metamorfoza3.png'

const ResponsiveCarousel = () => {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={false}  >
            <div>
                <img src={zdjecie1} />
                {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div>
                <img src={zdjecie2} />
            </div>
            <div>
                <img src={zdjecie3} />
            </div>
        </Carousel>
    )
}

export default ResponsiveCarousel
