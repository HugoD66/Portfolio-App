import GlobalStyle from "../style/GlobalStyle";
import styled, { ThemeProvider} from "styled-components";
import coloredTheme from '../style/themes/colored.json';
import darkTheme from '../style/themes/dark.json';

import React, {useState} from "react";
import Header from "./fixed/Header";
import Footer from "./fixed/Footer";
import Accueil from "./section/Accueil";
import Competences from "./section/Competences";
import Contact from "./section/Contact";
import PortFolio from "./section/Portfolio";
import Cursus from "./section/Cursus";
import { Gear, AddOutline } from '@rsuite/icons';




function Layout({ children }) {
    const [isColored, setIsColored] = useState(true);

    function handleToogleTheme() {
        setIsColored(!isColored);
    }
    return (
        <ThemeProvider theme={isColored ? coloredTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                <Header />
                    <Main>
                        { children }
                        <Accueil />

                    </Main>
                <Footer isColored={isColored} handleToogleTheme={handleToogleTheme} />
            </Wrapper>
        </ThemeProvider>
    );
}


const Wrapper =styled.div`
    
`;
const Main = styled.div`
  min-height: 100vh;
`;

export default Layout;