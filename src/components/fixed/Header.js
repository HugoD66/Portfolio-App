import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HD from "../../picture/HD-removedBack.png"
import React, { useState, useRef } from 'react';
import {Overlay} from "react-bootstrap";

export default function Header (){
    const location = useLocation();
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <Wrapper>
            <Nav>
                <Link to="/accueil-portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/accueil-portfolio-hugo"}>
                        Accueil
                    </MenuEL>
                </Link>
                <Link to="/compétences-portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/compétences-portfolio-hugo"}>
                        Compétences
                    </MenuEL>
                </Link>
                <Link to="/portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/portfolio-hugo"}>
                        Portfolio
                    </MenuEL>
                </Link>
                <Link to="/cursus-portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/cursus-portfolio-hugo"}>
                        Cursus
                    </MenuEL>
                </Link>
                <Link to="/contact-portfolio-hugo">
                    <MenuEL isCurrentPage={location.pathname === "/contact-portfolio-hugo"}>
                        Contact
                    </MenuEL>
                </Link>
            </Nav>
            <RightNav >
                <img src={HD} alt="Icone Hugo DESSAUW"/>
                <Hugo ref={target} onClick={() => setShow(!show)}>Hugo DESSAUW</Hugo>
            </RightNav>

            <Overlay target={target.current} show={show} placement="left">
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
                        }}
                    >
                    DESCRIPTION
                    </OverlayTemplate>
                )}
            </Overlay>
        </Wrapper>
    )
}
//Hugo Tooltip

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
  box-shadow: 0px 3px 14px 2px ${(props) => props.theme.boxShadow};

  & a {
    text-decoration: none;
    color: inherit;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16%;
  margin-top: 3%;
  img {
    width: 28%;
    height: 28%;
  }
  p {
    font-weight: lighter;
    margin-top: 3%;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;
const Hugo = styled.p`
  &:hover {
    font-weight: bold;
    text-decoration: underline solid 1px ${(props) => props.theme.mainColor};
    transform: scale(1.2);
    transition: all 0.6s ease-in-out;
    color: ${(props) => props.theme.buttonClicked};
  }
`;