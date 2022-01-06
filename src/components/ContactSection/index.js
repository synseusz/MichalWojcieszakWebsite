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
  headline2
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
              
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactSection;
