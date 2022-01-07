import styled from "styled-components";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export const Container = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align:center;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Heading2 = styled.h2`
  margin-bottom: 100px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 50px;
  }
`;
export const ContactInfoWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
export const MailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const MailIcon = styled(SiGmail)`
  height: 40px;
  width: 40px;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
export const Mail = styled.p`
  padding-top: 5px;
`;
export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  height: 40px;
  width: 40px;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
export const Phone = styled.p`
  padding-top: 5px;
`;
export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 100px;

  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;
export const FBIcon = styled(FaFacebook)`
  height: 50px;
  width: 50px;
  color: #01bf71;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;
export const IGIcon = styled(FaInstagram)`
  height: 50px;
  width: 50px;
  color: #01bf71;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;

/* GOOGLE MAP ELEMENT */
export const MapContainer = styled.div`
  height: 500px;
  width: 500px;
  border: 3px solid #01bf71;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    height: 350px;
    width: 100%;
  }
`;
export const InfoWindowTextWrapper = styled.div`
  max-width: 300px;
  text-align: left;
  color: black;
`;
export const Name = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 13px;
  padding-bottom: 5px;
`;
export const Line = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
`;
export const GoogleMapsLink = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  color: #5491f5;

  &:hover {
    text-decoration: underline;
  }
`;
