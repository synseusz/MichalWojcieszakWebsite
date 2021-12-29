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
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Michał Wojcieszak
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">O mnie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="collab">Współpraca</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="training-plans">Plany treningowe</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact">Kontakt</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
