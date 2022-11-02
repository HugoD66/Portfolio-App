import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {Tooltip} from "react-bootstrap";

const ProgressLine = ({
                          label,
                          picture,
                          visualParts = [
                              {
                                  percentage: "0%",
                                  color: "white"
                              }
                          ]
                      }) => {

    const [widths, setWidths] = useState(
        visualParts.map(() => {
            return 0;
        })
    );
    useEffect(() => {
        requestAnimationFrame(() => {
            setWidths(
                visualParts.map(item => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);

    return (
        <ProgressLineStyle>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">{label}</Tooltip>}
                >
                <Image src={picture} alt="Logo langage"/>
            </OverlayTrigger>

            <div className="progressVisualFull" >
                {visualParts.map((item, index) => {
                    return (
                            <div key={index}
                                style={{
                                    width: widths[index],
                                }}
                                className="progressVisualPart"
                            />
                    );
                })}
            </div>
        </ProgressLineStyle>
    );
};
const Image= styled.img`
  width: 28px;
  height: 28px;
  float:left;
  margin-right: 3%;
  @media (min-width: 495px) {
    width: 35px;
    height: 35px;
  }
  @media (min-width: 1500px) {
    width: 70px;
    height: 70px;
  }
`;
const ProgressLineStyle= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% auto;
  @media (min-width: 1500px) {
    margin: 3% auto;
  }
  .progressVisualFull {
    display: flex;
    background-color: ${(props) => props.theme.buttonNotClicked};
    /* Largeur ProgressBar */
    height: 15px;
    width: 80%;
    border-radius: 8px;
    @media (min-width: 1500px) {
      height: 25px;
    }
  }
  .progressVisualPart {
    transition: width 3s;
    background-color: ${(props) => props.theme.buttonClicked};
    border-radius: 8px;
  }
  .progressLabel {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
  }`;
export default ProgressLine;
