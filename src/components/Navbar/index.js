import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SocialsWrapper,
  FBIcon,
  IGIcon,
  LogoContainer,
  Icon,
  LogoTxtContainer,
  NavLogo2,
  BooksyIcon,
} from "./NavbarElements";

import logoIcon from "../../images/icon.png";
import booksyIcon from "../../images/booksyIcon.PNG"

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <LogoContainer
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <Icon src={logoIcon} />
            <LogoTxtContainer>
              <NavLogo>Michał Wojcieszak</NavLogo>
              <NavLogo2>Trener personalny</NavLogo2>
            </LogoTxtContainer>
          </LogoContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                O mnie
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="training-plans"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Pakiety Treningowe
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-79}
              >
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
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
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
