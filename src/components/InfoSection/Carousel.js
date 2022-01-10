import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselIMG, CarouselIMGcontainer } from './InfoElements';


import zdjecie1 from '../../images/metamorfoza1.jpg'
import zdjecie2 from '../../images/metamorfoza2.jpg'

const ResponsiveCarousel = () => {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={false}  >
            <div>
                <img style={{width:"500px", height:"500px"}} src={zdjecie1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img style={{width:"500px", height:"500px"}} src={zdjecie2} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    )
}

export default ResponsiveCarousel
