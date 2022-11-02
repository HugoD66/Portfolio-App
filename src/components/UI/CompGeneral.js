import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

function CompGeneral(props) {
    return (
        <div>
            <Description>
                    Durant mon cursus, j'ai été amené à utiliser
                        différents langages, aussi bien back que front.
                        J'ai également manipulé de nombreux
                        frameworks. <br/>Je me suis spécialisé en développement
                        d'application Symfony, et en Programmation
                        Orientée Objet.
            </Description>
            <Languages className="compAngFr">
                <Rounded className="dashboard">
                    <h4>Francais</h4>
                    <svg>
                        <circle className="bg" cx="57" cy="57" r="52"/>
                        <circle className="meter-1" cx="57" cy="57" r="52"/>
                    </svg>
                </Rounded>
                <Rounded className="dashboard">
                    <h4>Anglais</h4>
                    <svg>
                        <circle className="bg" cx="57" cy="57" r="52"/>
                        <circle className="meter-2" cx="57" cy="57" r="52"/>
                    </svg>
                </Rounded>
            </Languages>
            <SavoirEtre className="compSavoir">
                <h4>Savoir-être:</h4>
                <p>Autonome, respectueux, organisé.</p>
            </SavoirEtre>
        </div>
    );
}
const Description= styled.p`
    width: 75%;
    line-height: 1.5em;
    color: ${(props) => props.theme.fontCompGenerale};
    font-size: 1.2em;
    text-align: justify;
    margin: 5% auto;
    @media (min-width: 1500px) {
      font-size: 1.4em;
      text-align: center;
      margin-top: 7%;
    }
`;
const SavoirEtre= styled.div`
  text-align: center;
  h4 {
    color: ${(props) => props.theme.fontCompGenerale};
    font-size: 1.4em;
    margin: 2% auto;
    text-decoration: underline 2px solid ${(props) => props.theme.backSession};
    @media (min-width: 1500px) {
      margin: auto 1%;
      font-size: 2em;
    }
  }
  p {
    @media (min-width: 1500px) {
      font-size: 1.3em;
    }
  }
`;
const Languages= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 6% auto;
  background-color: ${(props) => props.theme.backSession};
  border-radius: 20px;
  @media (min-width: 1500px) {
    width: 60%;
  }
  .dashboard {
    display: flex;
    flex-direction: column;
    padding: 5%;
    align-items: center;
    text-align: center;
    h4 {
      color: ${(props) => props.theme.fontCompGenerale};
      font-family: Consolas,SansSerif,serif;
      @media (min-width: 1500px) {
        font-size: 2em;
      }
    }
  }
`;
const Rounded = styled.div`
  body {
    display: grid;
    height: 100vh;
    place-items: center;
    background: #243b47;
  }
  svg {
    width: 114px;
    height: 114px;
    margin: 1em;
  }
  .bg {
    fill: none;
    stroke-width: 10px;
    stroke: ${(props) => props.theme.buttonNotClicked};
  ;
  }
  [class^="meter-"] {
    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .meter-1 {
    stroke-dasharray: 405;
    stroke-dashoffset: 100;
    stroke: ${(props) => props.theme.buttonClicked};
  ;
    animation: progress-1 1s ease-out;
  }
      @keyframes progress-1 {
        from {
          stroke-dashoffset: 400;
        }
        to {
          stroke-dashoffset: 100;
        }
      }
  }
    .meter-2 {
      stroke-dasharray: 300;
      stroke-dashoffset: 100;
      stroke: ${(props) => props.theme.buttonClicked};
    ;
      animation: progress-1 1s ease-out;
    }
    @keyframes progress-1 {
      from {
        stroke-dashoffset: 400;
      }
      to {
        stroke-dashoffset: 100;
      }
    }
`;
export default CompGeneral;