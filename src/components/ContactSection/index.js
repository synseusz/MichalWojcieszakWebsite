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
  MailWrapper,
  MailIcon,
  Mail,
  PhoneWrapper,
  PhoneIcon,
  Phone
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
            </Column1>
            <Column2>
              <TextWrapper>
                <MailWrapper>
                  <MailIcon />
                  <Mail>michal.wojcieszak@gmail.com</Mail>
                </MailWrapper>
                <PhoneWrapper>
                    <PhoneIcon />
                    <Phone>12312244543</Phone>
                </PhoneWrapper>
              </TextWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactSection;
