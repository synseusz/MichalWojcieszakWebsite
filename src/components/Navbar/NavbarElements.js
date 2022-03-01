import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    align-items: center;
`
export const LogoContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 376px) {
        transform: scale(0.9);
        width:200px;
    }
`
export const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`
export const NavLogo = styled(LinkS)`
    /*font-family: 'Black Ops One', cursive;*/
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /*margin-left: 24px;*/
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 65%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    

    /*&.active {
        border-bottom: 3px solid #0195FE;
    }*/
    &:hover {
        color: #0195FE;
        transition: 0.2s ease-in-out;
    }
`
export const SocialsWrapper = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const FBIcon = styled(FaFacebook)`
    color: #fff;
    cursor: pointer;
    margin-right: 15px;
    height: 20px;
    width: 20px;

    &:hover {
        color: #0195FE;
        transition: 0.2s ease-in-out;
    }
`
export const IGIcon = styled(FaInstagram)`
    color: #fff;
    cursor: pointer;
    height: 20px;
    width: 20px;

    &:hover {
        color: #0195FE;
        transition: 0.2s ease-in-out;
    }
`