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
  BooksyIcon,
  BooksyTxt,
  BooksyLinkContainer,
} from "./SidebarElements";

import booksyIcon2 from "../../images/booksyIcon2.png";

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
            offset={-10}
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
            offset={-10}
          >
            Pakiety treningowe
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-10}
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
          <a
            href="https://www.instagram.com/call.me.mr.king/"
            target="_blank"
            rel="noreferrer"
          >
            <IGIcon />
          </a>
        </SocialsWrap>

        <BooksyLinkContainer>
          <BooksyTxt>Umów sie na trening!</BooksyTxt>
          <a
            href="https://booksy.com/pl-pl/137206_michal-wojcieszak-treningi-personalne_trening-i-dieta_13750_wroclaw#ba_s=sh_1"
            target="_blank"
            rel="noreferrer"
          >
            <BooksyIcon src={booksyIcon2} />
          </a>
        </BooksyLinkContainer>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
