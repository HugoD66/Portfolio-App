import styled from "styled-components";
import React from "react";
import LienApps from "../UI/LienApps";

export default function PortFolio({props}) {
    return (
        <PortFolioTemplate>
            <p>
                Durant ma formation, j'ai réalisé divers projets. Voici certains d'entre eux
                qui ont été mis en ligne : (non disponible fin de l'offre gratuite d'Heroku)
            </p>
            < LienApps />
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
      margin: auto;
      line-height: 1.5em;
      font-size: 1.3em;
      text-align: center;
      margin-bottom: 5%;
    }
`;
