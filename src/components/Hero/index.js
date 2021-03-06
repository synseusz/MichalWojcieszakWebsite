import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import Video from "../../videos/KAZ30055.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Helmet>
          <title>Michał Wojcieszak Trener Personalny</title>
          <meta
            name="description"
            content="Michal Wojcieszak, trener personalny swiadczacy uslugi we Wroclawiu. 11 lat doswiadczenia jako trener. Treningi silowe, motoryczne, wytrzymalosciowe, obwodowe. Razem zbudujemy wymarzona sylwetke."
          />
          <link rel="cannonical" href="/kontakt" />
        </Helmet>
      ) : null}
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg id="bgvideo" autoPlay loop muted playsInline>
            <source src={Video} type="video/mp4" />
          </VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1 data-aos="fade-down" data-aos-delay="500">
            Treningi personalne, dieta, motywacja.
          </HeroH1>
          <HeroP data-aos="fade-down" data-aos-delay="500">
            Wspólnie zbudujemy Twoją wymarzoną sylwetkę!
          </HeroP>
          <HeroBtnWrapper
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="1500"
          >
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Zaczynamy {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
