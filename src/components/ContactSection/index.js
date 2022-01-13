import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Heading2,
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
} from "../ContactSection/ContactSectionElements";
import GoogleMapElement from "./GoogleMap";

const ContactSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  topLine2,
  headline2,
}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
              </TextWrapper>
              <GoogleMapElement />
              <TextWrapper>
                <TopLine>Rio Top Gym</TopLine>
                <Text>Grabiszyńska 238/240, 53-235 Wrocław</Text>
                <a
                  href="https://riotopgym.pl/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none'}}
                >
                  <Link>LINK DO STRONY</Link>
                </a>
                <TopLine>Holmes Place OVO</TopLine>
                <Text>Podwale 83, 50-414 Wrocław</Text>
                <a
                  href="https://www.holmesplace.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none'}}
                >
                  <Link>LINK DO STRONY</Link>
                </a>
              </TextWrapper>
            </Column1>
            <Column2>
              <ContactInfoWrapper>
                <Heading2 lightText={lightText}>{headline2}</Heading2>
                <MailWrapper>
                  <MailIcon />
                  <Mail>michal.wojcieszak@gmail.com</Mail>
                </MailWrapper>
                <PhoneWrapper>
                  <PhoneIcon />
                  <Phone>+48 604 752 608</Phone>
                </PhoneWrapper>
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
              </ContactInfoWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactSection;
