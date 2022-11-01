import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HD from "../../picture/logo-HD.png"
import React, { useState, useRef } from 'react';
import {Overlay} from "react-bootstrap";

export default function Header (){
    const location = useLocation();
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <Wrapper>
            <Nav>
                <Link to="/">
                    <MenuEL isCurrentPage={location.pathname === "/"}>
                        Accueil
                    </MenuEL>
                </Link>
                <Link to="/compétences-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/compétences-hugo"}>
                        Compétences
                    </MenuEL>
                </Link>
                <Link to="/portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/portfolio-hugo"}>
                        Portfolio
                    </MenuEL>
                </Link>
                <Link to="/cursus-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/cursus-hugo"}>
                        Cursus
                    </MenuEL>
                </Link>
                <Link to="/contact-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/contact-hugo"}>
                        Contact
                    </MenuEL>
                </Link>
            </Nav>
            <RightNav >
                <img src={HD} alt="Icone Hugo DESSAUW" ref={target} onClick={() => setShow(!show)}/>
            </RightNav>

            <Overlay target={target.current} show={show} placement="bottom">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <OverlayTemplate
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: '#aed4e3',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            boxShadow: '0px 0px 17px -2px #000000\n'
                        }}
                    >
                        <OverlayContent>
                            <ul>
                                <li>Adresse : 21 Rue Nicolas Poussin</li>
                                <li>Formation : Developpeur Web</li>
                                <li>Nationalité : Francaise</li>
                                <li>Ville : 66000 Perpignan</li>
                                <li>Age :30 ans</li>
                            </ul>
                        </OverlayContent>

                    </OverlayTemplate>
                )}
            </Overlay>
        </Wrapper>
    )
}
//Hugo Tooltip
const OverlayContent = styled.div`
    font-size: 1.2em;
    line-height: 1.2em;
    font-family: ${(props) => props.theme.fontTheme};
  @media(min-width: 1500px) {
    font-size: 1.5em;
  }
`;
// Header
const Wrapper = styled.header`
  background-color: rgba(216, 215, 215, 0.13);
  backdrop-filter: blur(8px);
  position: sticky; /* fixation de l'header */
  height: auto;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  border-bottom: 1px solid black;
  box-shadow: 0px 3px 14px 1px ${(props) => props.theme.boxShadow};
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 1100px) {
    height: 140px;
  }
`;
const OverlayTemplate=styled.div`
  z-index: 2;
 
`;
//Navbar
const MenuEL=styled.p`
  text-decoration: none;
  line-height: 12px;
  font-size: 22px;
  margin-left: 25%;
  margin-top: 15%;
  margin-bottom: 15%;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    text-decoration: underline solid 1px ${(props) => props.theme.mainColor};
    transform: scale(1.2);
    transition: all 0.6s ease-in-out;  
    color: ${(props) => props.theme.buttonClicked};
  }
  @media (min-width: 1100px) {
    width: 150px;
    font-size: 1.5em;
  }
  @media (min-width: 1500px) {
    width: 170px;
    font-size: 1.7em;
  }
`;
const Nav = styled.nav`
  @media (min-width: 1100px) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  }
`;
// Nom/Icone
const RightNav=styled.div`
    margin-right: 4%;

  img {
    max-width: 7em;
    max-height: 7em;
    transition: all 0.3s ease-in-out;

  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.15);

  }
`;
