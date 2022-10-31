import styled from "styled-components";
import LightPic from "picture/accueil/mobile-back-light.jpg";
import DarkPic from "picture/accueil/mobile-back-dark.jpg";
import gsap from "gsap";
import React, {useState} from 'react';


export default function Accueil({isColored}) {

    gsap.set('.animationH1', { opacity: 0 });
    setTimeout(() => {
        window.open.tween = gsap.fromTo('.animationH1', {
                x: 400
            },
            {
                x: 20,
                duration: 2,
                delay: 1,
                scrollTrigger: '.animationH1',
                opacity: 1,
                ease: 'power2.out'
            }
        );
    }, 1);
    gsap.set('.animationH2', { opacity: 0 });
    setTimeout(() => {
        window.open.tween = gsap.fromTo('.animationH2', {
            },
            {
                duration: 3,
                delay: 2.5,
                scrollTrigger: '.animtationH2',
                opacity: 1,
                // eslint-disable-next-line no-restricted-globals
                webkitFilter:"blur( 0px)"            }
        );
    }, 5);


    return (
        <AccueilTemplate className="styleBack" style={{
            /*
            backgroundImage: `url(${(props) => props.theme.pictureAccueil})`
            backgroundImage: isColored ? `url(${DarkPic})` : `url(${LightPic}`
            backgroundImage: `url(${(props) => props.theme.pictureAccueil})`
             */
        }}
        >
            <ExplainContent>
                <h1 className="animationH1" >Developpeur</h1>
                <h2 className="animationH2">Dessauw <br/> Hugo</h2>
            </ExplainContent>
        </AccueilTemplate>
    );


}

const ExplainContent= styled.div`
  position: absolute;
  top: 10%;
  left:5%;
  h1 {
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 45px;
    position: absolute;
    opacity: 0;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
    left: -40px;
  }
  h2 {
    position: absolute;
    font-weight: bold;
    top: 80px;
    text-transform: uppercase;
    font-size: 45px;
    opacity: 0;
    text-align: end;
    margin: auto;
    width: auto;
    left: 110px;
    color: ${(props) => props.theme.boxShadow};
    filter: blur(4px);
    font-family: 'Lora', serif;
    -webkit-text-stroke: 1px ${(props) => props.theme.boxShadow}; /* width and color */
  }
`;
const AccueilTemplate = styled.div`
  width: 100%;
  margin: auto;
  height: 680px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  clear: both;
  overflow-x: hidden;
  position: relative;
  background-image: url(${LightPic});
}
`;


