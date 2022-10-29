import React from 'react';
import styled from "styled-components";

import { Carousel } from 'react-carousel3';
import Hypnos from "picture/carousel/hypnos.png";
import Ecoit from "picture/carousel/ecoit.png";
import Dantabase from "picture/carousel/dantabase.png";


const style = {
    width: 297,
    height: 296,
};

export default () => (
    <div
        style={{
            //Disposition du BLOC PRINCIPAL
            //Creer image application , avec titre au dessus(sans background), qui pivotera avec la photo
            display: 'flex',
            justifyContent: 'center',
            boxShadow: "5px 5px 15px 5px #000000"
        }}
    >
        <CarouselTemplate>
        <Carousel height={460} width={700} yOrigin={60} yRadius={25} autoPlay={false}  >
            <div key={1} style={style}>
                <img alt="" src={Hypnos} style={{
                    boxShadow: "-1px 0px 23px -4px #000000"
                }}/>
            </div>
            <div key={2} style={style}>
                <img alt="" src={Ecoit}  style={{
                    boxShadow: "-1px 0px 23px -4px #000000"
                }}/>
            </div>
            <div key={3} style={style}>
                <img alt="" src={Dantabase}  style={{
                    boxShadow: "-1px 0px 23px -4px #000000"
                }}/>
            </div>
            <div key={4} style={style}>
                <img alt="" src={Hypnos}  style={{
                    boxShadow: "-1px 0px 23px -4px #000000"
                }}/>
            </div>
            <div key={5} style={style}>
                <img alt="" src={Hypnos}  style={{
                    boxShadow: "-1px 0px 23px -4px #000000"
                }}/>
            </div>

        </Carousel>
        </CarouselTemplate>
    </div>
);
const CarouselTemplate= styled.div`
`;
