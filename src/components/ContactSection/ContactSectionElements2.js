import styled from "styled-components";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export const Container = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 100px 0;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopLine = styled.p`
  color: #0195fe;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`;
export const IMGWrap = styled.div`
  max-width: 300px;
  height: 100%;
`;
export const IMG = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
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
export const Text = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const Link = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #c71221;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin-top: 50px;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const MailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
export const MailIcon = styled(SiGmail)`
  height: 40px;
  width: 40px;
  color: #fff;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
export const Mail = styled.p``;
export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  height: 40px;
  width: 40px;
  color: #fff;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
export const Phone = styled.p``;
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
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #0195fe;
  }

  @media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;
export const IGIcon = styled(FaInstagram)`
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #0195fe;
  }

  @media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;
export const BooksyLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top:100px;
`
export const BooksyTxt = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`
export const BooksyIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`

/* GOOGLE MAP ELEMENT */
export const MapContainer = styled.div`
  height: 400px;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    height: 400px;
    width: 90%;
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
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
