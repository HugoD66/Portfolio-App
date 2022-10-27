import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

function CompGeneral(props) {
    return (
        <div>
            <Description>
                <p>Durant mon cursus, j'ai été amené à utiliser
                    différents languages, autant back que front.
                    J'ai également dût ?????  manipuler de nombreux
                    frameworks. Spécialisé en développement
                    d'application Symfony, et en Programmation
                    Orientée Objet. </p>
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
  font-size: large;
  text-align: justify;
  width: 90%;
  margin: 5% auto;
  color: ${(props) => props.theme.fontCompGenerale};

`;
const SavoirEtre= styled.div`
  text-align: center;
  p {
    color: white;
  }
  h4 {
    color: ${(props) => props.theme.fontCompGenerale};
    font-family: Consolas,SansSerif,serif;
  }
`;
const Languages= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 6% auto;
  background-color: ${(props) => props.theme.backSession};
  .dashboard {
    display: flex;
    flex-direction: column;
    padding: 5%;
    align-items: center;
    text-align: center;
    h4 {
      color: ${(props) => props.theme.fontCompGenerale};
      font-family: Consolas,SansSerif,serif;
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
    stroke-dasharray: 390;
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