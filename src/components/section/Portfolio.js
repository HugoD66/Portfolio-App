import styled from "styled-components";
import React from "react";
import Carousel from "../UI/Carousel";
import LienApps from "../UI/LienApps";



export default function PortFolio({props}) {
    return (
        <PortFolioTemplate>
            <p>
                Durant mon année d'étude, j'ai eut l'occasion
                de réaliser divers projets. Voici certains d'entre eux
                qui ont été mis en ligne :
            </p>
            < LienApps />
            < Carousel />
        </PortFolioTemplate>
    );
}
const PortFolioTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2em;
  text-align: justify;
  width: 90%;
  margin: 5% auto;
  color: ${(props) => props.theme.fontCompGenerale};
    p {
      width: 75%;
      line-height: 1.5em;
    }
`;
