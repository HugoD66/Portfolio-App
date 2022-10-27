import React, { useEffect, useState } from "react";

import ProgressLine from "./ProgressLine";




function CompTechnique(props) {


    return (
        <div>

            <ProgressLine
                label="HTML"
                visualParts={[
                    {
                        percentage: "90%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="CSS/SCSS"
                visualParts={[
                    {
                        percentage: "70%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="PHP"
                visualParts={[
                    {
                        percentage: "70%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="JavaScript"
                visualParts={[
                    {
                        percentage: "60%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="MySQL"
                visualParts={[
                    {
                        percentage: "75%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="Adobe XD"
                visualParts={[
                    {
                        percentage: "55%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="API Rest"
                visualParts={[
                    {
                        percentage: "50%",
                        color: "tan"
                    }
                ]}
            />








            <div className="compComplément">
                <p>IDE: PhpStorm <br/>
                    Système d'exploitation: Windows</p>
            </div>
        </div>
    );
}

export default CompTechnique;
