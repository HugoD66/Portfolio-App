import React from 'react';
import styled from "styled-components";

import { Carousel } from 'react-carousel3';
import Hypnos from "picture/carousel/hypnos.png";
import Ecoit from "picture/carousel/ecoit.png";
import Dantabase from "picture/carousel/dantabase.png";
import Clipboard from "picture/carousel/clipboard.png";
import Drum from "picture/carousel/drum.png";

const style = {
    width: 240,
    height: 296,

};
const stylePic = {
    boxShadow: "0px 12px 24px -3px rgba(0,0,0,0.7)",
    width: "60%",
    maxWidth: "60%",
    height: "53%",
}
export default () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '400',

        }}
    >
        <CarouselTemplate>
            <Carousel height={300} width={380}  xOrigin={260} yOrigin={50} yRadius={28} autoPlay={false}  >
                <div key={1} style={style}>
                    <img alt="" src={Hypnos} style={stylePic}/>
                </div>
                <div key={2} style={style}>
                    <img alt="" src={Ecoit}  style={stylePic}/>
                </div>
                <div key={3} style={style}>
                    <img alt="" src={Dantabase}  style={stylePic}/>
                </div>
                <div key={4} style={style}>
                    <img alt="" src={Clipboard} style={stylePic}/>
                </div>
                <div key={5} style={style}>
                    <img alt="" src={Drum} style={stylePic}/>
                </div>
            </Carousel>
        </CarouselTemplate>
    </div>
);
const CarouselTemplate= styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`;
