import styled from "styled-components";
import React from "react";
import Carousel from "../UI/Carousel";




export default function PortFolio({props}) {
    return (
        <PortFolioTemplate>

            < Carousel />
        </PortFolioTemplate>
    );
}
const PortFolioTemplate = styled.div`
  img {
    max-width: 250px;
    max-height: 250px;
    width: 250px;
    height: 250px;
  }
  width: 350px;
`;
