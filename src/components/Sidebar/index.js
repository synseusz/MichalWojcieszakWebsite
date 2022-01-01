import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
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
            to="collab"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Współpraca
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Kontakt
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
