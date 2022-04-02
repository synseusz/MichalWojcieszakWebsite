import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  MailWrapper,
  MailIcon,
  Mail,
  PhoneWrapper,
  PhoneIcon,
  Phone,
  SocialsWrapper,
  FBIcon,
  IGIcon,
  ContactInfoWrapper,
  Text,
  Link,
  ContactWrapper,
  IMGWrap,
  IMG,
} from "./ContactSectionElements2";
import GoogleMapElement from "./GoogleMap";

const ContactSection2 = ({
  lightBg,
  id,
  topLine,
  imgStart,
  lightText,
  headline,
  img,
  img2,
  alt,
  alt2,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <Container lightBg={lightBg} id={id}>
        <Wrapper>
          <TextWrapper>
            <TopLine data-aos="fade" data-aos-duration="1000" data-aos-delay='300'>
              {topLine}
            </TopLine>
            <Heading
              lightText={lightText}
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay='300'
            >
              {headline}
            </Heading>
          </TextWrapper>
          <GoogleMapElement />
          <ContactInfoWrapper>
            <Row imgStart={imgStart}>
              <Column1 data-aos="fade" data-aos-duration="1000" data-aos-delay='1000'>
                <TextWrapper>
                  <TopLine>Rio Top Gym</TopLine>
                  <IMGWrap>
                    <IMG src={img} alt={alt} />
                  </IMGWrap>
                  <Text>Grabiszyńska 238/240, 53-235 Wrocław</Text>
                  <a
                    href="https://riotopgym.pl/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Link>LINK DO STRONY</Link>
                  </a>
                  <br />
                  <TopLine>Holmes Place OVO</TopLine>
                  <IMGWrap>
                    <IMG src={img2} alt={alt2} />
                  </IMGWrap>
                  <Text>Podwale 83, 50-414 Wrocław</Text>
                  <a
                    href="https://www.holmesplace.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Link>LINK DO STRONY</Link>
                  </a>
                </TextWrapper>
              </Column1>
              <Column2 data-aos="fade" data-aos-duration="1000" data-aos-delay='1200'>
                <ContactWrapper>
                  <MailWrapper>
                    <MailIcon />
                    <Mail>michal.wojcieszak@gmail.com</Mail>
                  </MailWrapper>
                  <PhoneWrapper>
                    <PhoneIcon />
                    <Phone>+48 604 752 608</Phone>
                  </PhoneWrapper>
                </ContactWrapper>
                <SocialsWrapper>
                  <a
                    href="https://www.facebook.com/trener.michal.wojcieszak"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FBIcon />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IGIcon />
                  </a>
                </SocialsWrapper>
              </Column2>
            </Row>
          </ContactInfoWrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ContactSection2;
