import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressLine = ({
                          label,
                          backgroundColor = "#3C4048",
                          // expected format for visual parts
                          visualParts = [
                              {
                                  percentage: "0%",
                                  color: "white"
                              }
                          ]
                      }) => {
    // Starting values needed for the animation
    // Mapped by "visualParts" so it can work with multiple values dynamically
    // It's an array of percentage widths
    const [widths, setWidths] = useState(
        visualParts.map(() => {
            return 0;
        })
    );

    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        // You need to wrap it to trigger the animation
        requestAnimationFrame(() => {
            // Set a new array of percentage widths based on the props
            setWidths(
                visualParts.map(item => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);

    return (
        <ProgressLineStyle>
            <div className="progressLabel">{label}</div>
            <div
                className="progressVisualFull"
                // to change the background color dynamically

            >
                {visualParts.map((item, index) => {
                    // map each part into separate div and each will be animated
                    // because of the "transition: width 2s;" css in class "progressVisualPart"
                    // and because of the new width ("widths[index]", previous one was 0)
                    return (
                        <div
                            // There won't be additional changes in the array so the index can be used
                            /* eslint-disable-next-line react/no-array-index-key */
                            key={index}
                            style={{
                                width: widths[index],
                                // setting the actual color of bar part
                            }}
                            className="progressVisualPart"
                        />
                    );
                })}
            </div>
        </ProgressLineStyle>
    );
};
const ProgressLineStyle= styled.div`
  .progressVisualFull {
    display: flex;
    background-color: ${(props) => props.theme.buttonNotClicked};

    /* Largeur ProgressBar */
    height: 20px;
    margin: 20px 0;
  }

  .progressVisualPart {
    /* Number of the seconds for complete animation */
    transition: width 3s;
    background-color: ${(props) => props.theme.buttonClicked};
  }

  .progressLabel {
    /* Nothing here, move along */
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  body {
    margin: 20px;
    padding: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
  }`;


export default ProgressLine;
