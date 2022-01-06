import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SocialsWrap,
  FBIcon,
  IGIcon,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            O mnie
          </SidebarLink>
          <SidebarLink
            to="training-plans"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Plany treningowe
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        <SocialsWrap>
          <a
            href="https://www.facebook.com/trener.michal.wojcieszak"
            target="_blank"
            rel="noreferrer"
          >
            <FBIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <IGIcon />
          </a>
        </SocialsWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
